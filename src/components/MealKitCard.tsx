import styled from 'styled-components';
import { MealKit } from '../data/mealKits';
import { groceries } from '../data/groceries'; 


type Props = {
  kit: MealKit;
  onAddKit: (ingredients: MealKit['ingredients']) => void;
};


export const MealKitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledMealKitCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 400px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const MealKitImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const MealKitContent = styled.div`
  padding: 16px;
`;

export const MealKitTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 8px;
`;

export const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const IngredientImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MealKitFooter = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewRecipeButton = styled.button`
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #45a049;
  }
`;

const Details = styled.details`
  summary {
    cursor: pointer;
    font-weight: 400;
    color: #444;
    margin-bottom: 0.2rem;
  }
  pre {
    background: #f9f9f9;
    padding: 12px;
    border-radius: 8px;
    white-space: pre-wrap;
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
  }
`

const MealKitCard = ({ kit, onAddKit }: Props) => {
  return (
    <StyledMealKitCard>
      {kit.image && <MealKitImage src={kit.image} alt={kit.name} />}

      <MealKitContent>
        <MealKitTitle>{kit.name}</MealKitTitle>

        <p><strong>Ingredients:</strong></p>
        <IngredientsList>
          {kit.ingredients.map((item) => {
            const grocery = groceries.find((g) => Number(g.id) === Number(item.id));

            return (
              <IngredientItem key={item.id}>
                {grocery?.image && (
                  <IngredientImage src={grocery?.image} alt={item.name} />
                )}
                {item.name} - {item.quantity}
              </IngredientItem>
            );
          })}
        </IngredientsList>

        <MealKitFooter>
         {/*  <span>Prep Time: {kit.prepTime} mins</span> */}
          <ViewRecipeButton
            onClick={() => {
              const enrichedIngredients = kit.ingredients.map(item => {
                const grocery = groceries.find((g) => Number(g.id) === Number(item.id));
                return {
                  ...item,
                  image: grocery?.image || '',
                };
              });
              onAddKit(enrichedIngredients);
            }}
          >
            Add Kit to Cart
          </ViewRecipeButton>
        </MealKitFooter>

        <Details>
          <summary style={{ marginTop: '1.1rem'}}>View Recipe</summary>
          <pre>{kit.recipe}</pre>
        </Details>
      </MealKitContent>
    </StyledMealKitCard>
  );
};

export default MealKitCard;
