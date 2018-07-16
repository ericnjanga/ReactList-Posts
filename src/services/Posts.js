import React from 'react';
import { database } from './services-init.js';

const nodeName = 'timeline';
class Posts {
  static fetch() {
    const odePosts = database.ref(nodeName);
    return new Promise((resolve, reject) => {
      odePosts.on('value', (snapshot) => {
        const postsMap = new Map(Object.entries( snapshot.val() ));
        let postsList = [];
        postsMap.forEach((value, key) => {
          let post = Object.assign({}, value);
          post.id = key;
          //push values in a regular array 
          postsList.push(post);
        });//postMap

        resolve(postsList);
      });// [end] within odePosts 
    });// [end] Promise 
  }// [end] getAll
}

export default Posts;