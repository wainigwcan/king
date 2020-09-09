const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    banner: { type: String },
    title: { type: String },//称号
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }], //可以有多个 类型
    scores: {
        difficult: { type: Number }, //难度
        skills: { type: Number }, //技能
        attack: { type: Number }, //攻击
        survive: { type: Number } //生存
    },
    skills: [{
        icon: { type: String },//图标
        name: { type: String }, //名字
        delay: { type: String }, //名字
        cost: { type: String }, //名字
        description: { type: String },// 介绍
        tips: { type: String }, //小提示
    }],
    items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }], //顺风出装
    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],// 逆风出装
    usageTips: { type: String }, //使用技巧
    battleTips: { type: String }, //对抗技巧
    teamTips: { type: String }, //团战思路
    partners: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" }, // 关联英雄
        description: { type: String },// 介绍
    }]
});

module.exports = mongoose.model("Hero", Schema, 'heroes')