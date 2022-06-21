import React, { useEffect, useState } from 'react'
import { CategoriesGrid } from '../components/CategoriesGrid'
import { fetchCategories } from "../fetchers/fetchStroi"
import Slider from "../Slider/Slider"
export const HomePage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchCategories().then(res => setData(res))
    }, [])

    return (
        <div style={{ margin: "auto 155px" }}>
            <Slider />
            <h4>Категории</h4>
            <CategoriesGrid categories={data} />
        </div>
    )
}
