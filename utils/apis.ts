import axios from "axios";

import { BASE_API_URL } from "../constatnts/api";

const getStory = async (id: string | number) => {
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

export const getComments = async (user: number[]) => {
  try {
    const comments = await Promise.all(
      user.map(async (val) => {
        let comment = await getStory(val);
        if (comment.kids) {
          const comments = await getComments(comment.kids);
          comment.kids = comments;
        }
        return await comment;
      })
    );
    return comments;
  } catch (error) {
    console.error(error);
  }
};

export const getStories = async (type: string) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.error(error);
  }
};
