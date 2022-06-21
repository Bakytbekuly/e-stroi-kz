import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import { ListCount } from './ListCount';
import { Wrapper } from "./customization/WrapperMenu"
import styled from "@emotion/styled";
import ListItem from '@mui/material/ListItem';
import { LinkBase } from './customization/LinkBase';


const StyledListItem = styled(ListItem)`

&:hover {
  background: rgb(102,192,93);
  color: white;
}

${({ active }) => active && ({
        background: "white",
        color: "white",
    })}

`


export default function GutterlessList({ categories, limit }) {
    const [expanded, setExpanded] = React.useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const visibleCategories = React.useMemo(() => {
        return (categories ?? []).slice(0, expanded ? undefined : limit)
    }, [categories, limit, expanded])

    const limitDiff = React.useMemo(() => {
        if (!limit || !categories) return 0
        return Math.max(categories.length - limit, 0)
    }, [limit, categories])

    return (
        <>
            <Wrapper sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {(visibleCategories ?? []).map((value) => (
                    <StyledListItem
                        key={value.id}
                        active={value === selectedCategory}
                        disableGutters
                        style={{ borderBottom: "1px solid #C8C8C8", padding: "0px" }}
                        onMouseEnter={() => { setSelectedCategory(value) }}

                    >
                        <LinkBase to={`/catalog?categoryId=${value.id}`}>
                            <ListItemText primary={<ListCount count={value} />} />
                        </LinkBase>

                    </StyledListItem>
                ))}
                {!!limitDiff && (
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", color: "rgb(102,192,93)" }} onClick={() => setExpanded(!expanded)}>{expanded ? '-' : '+'}{limitDiff} категории</div>
                )}
            </Wrapper>

        </>

    );
}
