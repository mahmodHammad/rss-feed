function HandleAddNewRss(category, name, url,Categories) {
    let cloneCategories = [...Categories]
    let existedCategory = Categories.findIndex(c => c.name.toLowerCase() === category.toLowerCase())

    if (existedCategory !== -1) {
        cloneCategories[existedCategory].value.push({ name, url })
    } else {
        let newCategory = { name: category, value: [{ name, url }] }
        cloneCategories.push(newCategory)
    }
    return cloneCategories
}

export {HandleAddNewRss}