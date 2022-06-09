const INITIAL_STATE = {
    sections: [
        {
            title: "Whisky type 1",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: "shop/hats"
        },
        {
            title: "Whisky type 2",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "shop/jackets"
        },
        {
            title: "Whisky type 3",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "shop/sneakers"
        },
        {
            title: "Whisky type 4",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            size: "large",
            id: 4,
            linkUrl: "shop/womens"
        },
        {
            title: "Whisky type 5",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            size: "large",
            id: 5,
            linkUrl: "shop/mens"
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer