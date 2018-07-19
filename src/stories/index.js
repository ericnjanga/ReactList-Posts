import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './../components/List.js';
import { dummyPosts } from './../settings/dummy-data.js';

 
storiesOf('List', module)
  .add('No text field and No image', () => (
    <List collection={dummyPosts} titleKey="title" />
  ))

storiesOf('List', module)
  .add('with text field and No image', () => (
    <List collection={dummyPosts} titleKey="title" textKey="content" />
  ))

  storiesOf('List', module)
    .add('with text field and image', () => (
      <List collection={dummyPosts} titleKey="title" textKey="content" imgKey="img" />
    ))
