import MainScreen from '@/screens/MainScreen';
import React from 'react';
import { recipes } from '@/data/recipe';
import { Recipe } from '@/types/types';

const page = () => {
  return (
    <div>
      {recipes.map((recipe: Recipe) => (
        <MainScreen key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default page;
