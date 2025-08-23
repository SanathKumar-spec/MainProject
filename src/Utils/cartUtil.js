import { useState } from "react";
import Notification from "../components/Notification";


export function getCart(){
    let cart = JSON.parse(sessionStorage.getItem("cart"))
    if(!Array.isArray(cart)) cart = [];
    return cart;
}

export function addToCart(item){
    let cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const existingUser = cart.find(c => c.id === item.id)
    if(existingUser){
        cart = cart.map(c =>
            c.id === item.id ? {...c, qty: c.qty + 1} : c        )
    }else{
        cart.unshift({...item, qty:1});
    }
    sessionStorage.setItem(("cart"), JSON.stringify(cart));
    return cart;
}

export function removeItem(item){
    let cart = getCart()
    cart = cart.filter(c => c.id !== item.id)
    sessionStorage.setItem("cart", JSON.stringify(cart))
    return cart;
}
