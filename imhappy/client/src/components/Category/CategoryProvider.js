import React, { useState, createContext, useContext } from 'react';
import { UserProfileContext } from '../UserProfile/UserProfileProvider';

const apiUrl = '/api/category';

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const { getToken } = useContext(UserProfileContext);

  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    return getToken().then((token) =>
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setCategories)
    );
  };

  return (
    <CategoryContext.Provider value={{ categories, getAllCategories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
