import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import _ from "lodash";
import { AiFillStar } from "react-icons/ai";

const menus = [
  {
    id: 1,
    title: "Breakfast",
    data: [
      {
        name: "Tea and Bread",
        des: "Classic organc Tea",
        price: "GHc 20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPELIJwDd2ZvbHr05AgEFsi5blxtBoTWnZQ&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.8 (1K Reviews)",
      },
      {
        name: "Monash Hehe",
        des: "Amazing Food what!",
        price: "GHc 30",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wQtSKcQ00b7jCQEoM_XZ8a4NbLru_J7TYA&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPELIJwDd2ZvbHr05AgEFsi5blxtBoTWnZQ&usqp=CAU",

        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtLawni_---LtygFIzITzIH19Jp70cbc0Ww&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
    ],
  },
  {
    id: 2,
    title: "Lunch",
    data: [
      {
        name: "Rice and Fries",
        des: "Classic organc Tea",
        price: "GHc 20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpen_l-MAPeXOm3nlJKOUkF-qzvGDuJ_WtQ&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.8 (1K Reviews)",
      },
      {
        name: "Indiana Rice Ball",
        des: "Amazing Food what!",
        price: "GHc 30",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IeuVhbiM0p-W2oKMg2Ct9_0mssTFt7ugwA&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Yam Balls and Fish",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquSMJBduDLt58lIXTuMrJrgtQd-b_hFmR7A&usqp=CAU",

        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtLawni_---LtygFIzITzIH19Jp70cbc0Ww&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
    ],
  },
  {
    id: 3,
    title: "Supper",
    data: [
      {
        name: "Tea and Bread",
        des: "Classic organc Tea",
        price: "GHc 20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPELIJwDd2ZvbHr05AgEFsi5blxtBoTWnZQ&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.8 (1K Reviews)",
      },
      {
        name: "Monash Hehe",
        des: "Amazing Food what!",
        price: "GHc 30",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wQtSKcQ00b7jCQEoM_XZ8a4NbLru_J7TYA&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPELIJwDd2ZvbHr05AgEFsi5blxtBoTWnZQ&usqp=CAU",

        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtLawni_---LtygFIzITzIH19Jp70cbc0Ww&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
    ],
  },
  {
    id: 4,
    title: "Dessert",
    data: [
      {
        name: "Red velvet Cake",
        des: "Classic organc Tea",
        price: "GHc 19",
        image:
          "https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.8 (1K Reviews)",
      },
      {
        name: "Chocolate Ice Cream",
        des: "Amazing Food what!",
        price: "GHc 30",
        image:
          "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://izzycooking.com/wp-content/uploads/2021/05/Spanish-Desserts_Thumbnail.jpg",

        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtLawni_---LtygFIzITzIH19Jp70cbc0Ww&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
    ],
  },
  {
    id: 5,
    title: "Snacks",
    data: [
      {
        name: "Tea and Bread",
        des: "Classic organc Tea",
        price: "GHc 20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq0yZhtf_IEF2P6t0dsTUiEcGc9QLAGn2QCW249aPM-ZIieSy-9rhLquFJSgcPLBjmRE&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.8 (1K Reviews)",
      },
      {
        name: "Monash Hehe",
        des: "Amazing Food what!",
        price: "GHc 30",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wQtSKcQ00b7jCQEoM_XZ8a4NbLru_J7TYA&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPELIJwDd2ZvbHr05AgEFsi5blxtBoTWnZQ&usqp=CAU",

        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
      {
        name: "Vegies Mashup",
        price: "GHc 100",
        des: "Good food for good health",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtLawni_---LtygFIzITzIH19Jp70cbc0Ww&usqp=CAU",
        reviewers: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFmmjbzFD1XgNXZTZIlgzlpjJVFSG9uFjddHKb3m-YRZQlZYglQCWO6AjJBQwF0T3_PoU&usqp=CAU",

          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsiHCKYJayWq_kDj5__9eqrpe4kqcYPd8AeykdaHnjNtaQK1hUZc-SOUYSMCSQnk0M9Y&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7SR6azQN4Vxd9wMQd2-I2N3ajN73uO7v6OWrtIQ0G3cB-bSfYTcHh3Dt0a8ljCJCIHY&usqp=CAU",
        ],
        review: "4.2 (6K Reviews)",
      },
    ],
  },
];

function MenuOptions() {
  const [activeFilter, setActiveFilter] = useState(menus[0].title);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    // const list = menuData.filter(menu => menu.title === activeFilter)
    const currentMenu = _.find(menus, {
      title: activeFilter,
    });
    setMenuList(currentMenu.data);
  }, [activeFilter]);
  return (
    <div>
      <div className={style.menu}>
        <div className={style.menu_header}>
          <h3>Our best menu</h3>
        </div>
        <div className={style.menu__filter_container}>
          {menus.map((item) => (
            <div
              key={item.id}
              className={
                activeFilter === item.title
                  ? style.menu__filter_active
                  : style.menu__filter
              }
              onClick={() => setActiveFilter(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      {/* <div>{JSON.stringify(menuList)}</div> */}
      <div className={style.menu__list_container}>
        {menuList.map((item, i) => (
          <div key={i} className={style.menu__card}>
            <img src={item.image} alt="" className={style.menu__foodimg} />
            <div className={style.review}>
              <div className={style.menu__reviewers}>
                {item.reviewers.map((reviewer, index) => (
                  <div key={index} className={style.menu__reviewer}>
                    <img src={reviewer} />
                  </div>
                ))}
              </div>
              <p className={style.review__text}>
                <AiFillStar className={style.icon} />
                {item.review}
              </p>
            </div>
            <h3 className={style.menu__foodname}>{item.name}</h3>
            <p className={style.menu__foodname}>{item.des}</p>
            <h3 className={style.menu__foodprice}>{item.price}</h3>
            <div className={style.menu__btndiv}>
              <button className={style.menu__btn}>Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOptions;
