class search{

    get searchBar(){
        return('#search')
    }

Search(searchBar){
    cy.get(this.searchBar).click
    cy.get(this.searchBar).type(searchBar)
}

}
export default new search()