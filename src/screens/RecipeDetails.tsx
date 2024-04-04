import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeDetailsCard from '../component/RecipeDetailsCard'


export default function RecipeDetails() {
    const {id} = useParams()
    
  return (
    <div><RecipeDetailsCard recipeId={id} /> </div>
  )
}
