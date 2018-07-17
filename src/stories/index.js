import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './../components/List.js';


const posts = [
  {
  id: 1,
  title: 'Create Apps with No Configuration',
  },
  {
  id: 2,
  title: 'Mixins Considered Harmful',
  },
  ];


storiesOf('List', module)
  .add('without text field', () => (
    <List collection={posts} titleKey="title" />
  ))

storiesOf('List', module)
  .add('with text field', () => (
    <List collection={posts} titleKey="title" textKey="" />
  ))
