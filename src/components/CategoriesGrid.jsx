import { CategoryCounter, CategoryItem } from "./customization/CategoryItem";
import styled from "@emotion/styled";
import { LinkBase } from "./customization/LinkBase";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 15px;
`

export function CategoriesGrid({ categories }) {
  // console.log(categories);
  return (
    <Grid>
      {categories?.map((category) => (
        <LinkBase to={`/catalog`} key={category.id}>
          <CategoryItem>
            {category.name}
            <CategoryCounter>
              {category.childCount}
            </CategoryCounter>
          </CategoryItem>
        </LinkBase>
      ))}
    </Grid>
  )
}
