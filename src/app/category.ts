export interface Category {
    id: number;
    name: string;
    color: string;
    items: GroupElement[];
}
export interface Item {
    id: number;
    name: string;
}


export type GroupElement = Item | Category
/*
    Item: 
    ID: number
    name: string;
    category: obiekt z tablicy kategorii

    Categories:
    ID: number
    name: string
    color: NameColor
    maincategory: rekurencyjna relacja z inną kategorią

    
    Group:
        Category:
            - End-Item
            - End-Item
        Category:
            Category class=[pl-0] :
            - End-Item
            - End-Item
            Category class=[pl-8] :
                - End-Item
                - End-Item
            Category class=[pl-8] :
                - End-Item
*/
