import styled from "@emotion/styled";
import GridItem from "./GridItem"
import { NotFoundPage } from "./NotFoundPage";


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 15px;
`

export function CatalogGrid({ categories }) {

    return (
        <>
            {categories == false ? <NotFoundPage message="No Product" /> : <Grid>
                {categories?.map((category) => (
                    <GridItem categories={category} key={category.id} />
                ))}
            </Grid>}
        </>

    )
}
