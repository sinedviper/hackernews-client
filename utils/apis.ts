import axios from "axios";

import { BASE_API_URL } from "../constatnts/api";

export const getStory = async (id: string | number) => {
  try {
    const story = await axios
      .get(`${BASE_API_URL}/item/${id}.json`)
      .then((res) => res);

    return story.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id: string) => {
  try {
    const user = await axios
      .get(`${BASE_API_URL}/user/${id}.json`)
      .then((res) => res);
    return user.data;
  } catch (error) {
    console.error(error);
  }
};

export const getComments = async (user: number[], num: number = 0) => {
  try {
    const comments = await Promise.all(
      user.slice(num, num + 30).map(async (val) => {
        let comment = await getStory(val);
        if (comment.kids) {
          comment.kids = await getComments(comment.kids);
        }
        return await comment;
      })
    );
    return comments;
  } catch (error) {
    console.error(error);
  }
};

export const getStories = async (type: string, num: number = 0) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(
      storyIds.slice(num, num + 30).map(getStory)
    );
    return { posts: stories, size: storyIds.length };
  } catch (error) {
    console.error(error);
  }
};
