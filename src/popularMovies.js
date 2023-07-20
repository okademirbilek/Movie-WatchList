// const movieData =[
//     {
//         "id": 1,
//         "title": "Ant-Man and The Wasp: Quantumania",
//         "url": "https://www.rottentomatoes.com/m/ant_man_and_the_wasp_quantumania",
//         "img": "https://resizing.flixster.com/Kyz5hyQIexUuB2PjCgEn6HeLMZU=/fit-in/180x240/v2/https://resizing.flixster.com/_0Mhf0W_vdhwlaqOaUDX6JiReKA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0OGY2MTIxLTE1MDEtNDI5YS1hYzVlLWYyMzExYjBmZTlhMC5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Paul Rudd",
//             "Evangeline Lilly",
//             "Jonathan Majors",
//             "Bill Murray"
//         ],
//         "directedBy": [
//             "Peyton Reed"
//         ]
//     },
//     {
//         "id": 2,
//         "title": "Knock at the Cabin",
//         "url": "https://www.rottentomatoes.com/m/knock_at_the_cabin",
//         "img": "https://resizing.flixster.com/rxPJ1I5l8oei28YXkd2latAw8m0=/fit-in/180x240/v2/https://resizing.flixster.com/5dJGA-d38uNrcR2nDq1UmVBRuHc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4NDdmZDU3LWMxNTQtNDczOC04M2VkLTQzNzQ5NGVkODExZi5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Dave Bautista",
//             "Jonathan Groff",
//             "Ben Aldridge",
//             "Nikki Amuka-Bird"
//         ],
//         "directedBy": [
//             "M. Night Shyamalan"
//         ]
//     },
//     {
//         "id": 3,
//         "title": "All That Breathes",
//         "url": "https://www.rottentomatoes.com/m/all_that_breathes",
//         "img": "https://resizing.flixster.com/q_7NUBztTbPiCnyUTXZm32hWr9o=/fit-in/180x240/v2/https://resizing.flixster.com/sP16cjgBL-XWStdPbig_SMF_kYs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMzYmQyMjk5LWMzMTYtNGY4OS1hOGU5LTMxZWNhMDBjZTgwNy5qcGc=",
//         "year": "2022",
//         "starring": [],
//         "directedBy": [
//             "Shaunak Sen"
//         ]
//     },
//     {
//         "id": 4,
//         "title": "Your Place or Mine",
//         "url": "https://www.rottentomatoes.com/m/your_place_or_mine_2023",
//         "img": "https://resizing.flixster.com/VKmpnuxxOp5XDxgOY-L5KlGPCug=/fit-in/180x240/v2/https://resizing.flixster.com/boLnoOLSE8jn8Rk2vVsnIP2WIvg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwMThjNTU3LTM5MTUtNDNkZS1iOGU4LWYwMDhkMDg3NzgzMy5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Reese Witherspoon",
//             "Ashton Kutcher",
//             "Steve Zahn",
//             "Wesley Kimmel"
//         ],
//         "directedBy": [
//             "Aline Brosh McKenna"
//         ]
//     },
//     {
//         "id": 5,
//         "title": "Magic Mike's Last Dance",
//         "url": "https://www.rottentomatoes.com/m/magic_mikes_last_dance",
//         "img": "https://resizing.flixster.com/4m4IdixT5f7aySeN0l3_FIFKC0I=/fit-in/180x240/v2/https://resizing.flixster.com/dSyi0qq5pZSCRC1VH_oo02R4QRE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRhMWZhYmFhLWFmODgtNDg1MC1hMTk5LWMwOTcyMDhjY2Y1YS5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Channing Tatum",
//             "Salma Hayek",
//             "Caitlin Gerard",
//             "Gavin Spokes"
//         ],
//         "directedBy": [
//             "Steven Soderbergh"
//         ]
//     },
//     {
//         "id": 6,
//         "title": "Plane",
//         "url": "https://www.rottentomatoes.com/m/plane",
//         "img": "https://resizing.flixster.com/MCZVMmu066oFq26rnAueV0uF0rg=/fit-in/180x240/v2/https://resizing.flixster.com/96gGzEOuV_fOYF8NKCANgRXH3SI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUzN2ViMzg3LWNjNGUtNDFjZC1hMzZiLTgyYWEwOWIzZTdlZi5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Gerard Butler",
//             "Mike Colter",
//             "Yoson An",
//             "Daniella Pineda"
//         ],
//         "directedBy": [
//             "Jean-François Richet"
//         ]
//     },
//     {
//         "id": 7,
//         "title": "M3GAN",
//         "url": "https://www.rottentomatoes.com/m/m3gan",
//         "img": "https://resizing.flixster.com/LMbScjDLUzsQLgeeoOF0FAhNcC8=/fit-in/180x240/v2/https://resizing.flixster.com/rPJASTXFjLpmiVTi3D6RGcq-skM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjYjA0ODBiLTNlNmUtNDlhOS05ZWRlLThlOGQ2MmEyZjlmYS5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Allison Williams",
//             "Violet McGraw",
//             "Ronny Chieng",
//             "Brian Jordan Alvarez"
//         ],
//         "directedBy": [
//             "Gerard Johnstone"
//         ]
//     },
//     {
//         "id": 8,
//         "title": "You People",
//         "url": "https://www.rottentomatoes.com/m/you_people_2023",
//         "img": "https://resizing.flixster.com/fd5FRTShNXhXCnrMGVQE-tB4IgI=/fit-in/180x240/v2/https://resizing.flixster.com/aGnQYra1iGiD80rvz89jeaAvSWo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ViNTY4YzYwLTA0YjMtNDRlMS04YjllLTUyZWQ4ZmRjOGRiYi5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Jonah Hill",
//             "Lauren London",
//             "Eddie Murphy",
//             "Julia Louis-Dreyfus"
//         ],
//         "directedBy": [
//             "Kenya Barris"
//         ]
//     },
//     {
//         "id": 9,
//         "title": "Puss in Boots: The Last Wish",
//         "url": "https://www.rottentomatoes.com/m/puss_in_boots_the_last_wish",
//         "img": "https://resizing.flixster.com/SScFkb_uOTYce9WEQrSiGeJtMXE=/fit-in/180x240/v2/https://resizing.flixster.com/vtIcjOYiM-QBXQyXhTFFgQoRkDw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNjM3ZTc2LTk5ZmMtNGJhNy04MDAzLWI3M2IxNmExNDNkYi5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Antonio Banderas",
//             "Salma Hayek",
//             "Olivia Colman",
//             "Harvey Guillen"
//         ],
//         "directedBy": [
//             "Joel Crawford"
//         ]
//     },
//     {
//         "id": 10,
//         "title": "The Banshees of Inisherin",
//         "url": "https://www.rottentomatoes.com/m/the_banshees_of_inisherin",
//         "img": "https://resizing.flixster.com/38PH-W8opo0IaZfagCCFJtTq-_8=/fit-in/180x240/v2/https://resizing.flixster.com/SqYohHz5ela5G1qTZ8aKYunK2Oo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZjI3ZDBiLTkwMDktNDVkZC1hZmI5LTJiNDdjNWRmZDVjOC5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Colin Farrell",
//             "Brendan Gleeson",
//             "Kerry Condon",
//             "Barry Keoghan"
//         ],
//         "directedBy": [
//             "Martin McDonagh"
//         ]
//     },
//     {
//         "id": 11,
//         "title": "Black Panther: Wakanda Forever",
//         "url": "https://www.rottentomatoes.com/m/black_panther_wakanda_forever",
//         "img": "https://resizing.flixster.com/459b5JEuNlUflNrebS0a807KMYI=/fit-in/180x240/v2/https://resizing.flixster.com/QJkeIM6LIvwmRGiLKrNBcpZIk8M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAwYzExZjlmLWJlODQtNDY4Mi1iNDhkLWU2YWNmMGIyMDgwMi5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Letitia Wright",
//             "Angela Bassett",
//             "Lupita Nyong'o",
//             "Tenoch Huerta"
//         ],
//         "directedBy": [
//             "Ryan Coogler"
//         ]
//     },
//     {
//         "id": 12,
//         "title": "80 for Brady",
//         "url": "https://www.rottentomatoes.com/m/80_for_brady",
//         "img": "https://resizing.flixster.com/qoAJ6c2ANdlSkO8NNnQLj3hkzkI=/fit-in/180x240/v2/https://resizing.flixster.com/D7qwW_u23xMtpwTt78eNVmVLFuI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I4Mzk4ZTkzLTYzZjktNGI0My05OTYwLWIzZjIxMDkwMTQwNC5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Lily Tomlin",
//             "Jane Fonda",
//             "Rita Moreno",
//             "Sally Field"
//         ],
//         "directedBy": [
//             "Kyle Marvin"
//         ]
//     },
//     {
//         "id": 13,
//         "title": "Babylon",
//         "url": "https://www.rottentomatoes.com/m/babylon_2022",
//         "img": "https://resizing.flixster.com/DU80S4HnJFcuinUzwoq0WZiCWro=/fit-in/180x240/v2/https://resizing.flixster.com/dEbrJa07LETKJiiO54Tqxb-ImXk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5OTE0OTdhLWQ1MTAtNDgyMS04M2YzLTdkNmVjZDYxNmZlMy5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Brad Pitt",
//             "Margot Robbie",
//             "Diego Calva",
//             "Jean Smart"
//         ],
//         "directedBy": [
//             "Damien Chazelle"
//         ]
//     },
//     {
//         "id": 14,
//         "title": "Somebody I Used To Know",
//         "url": "https://www.rottentomatoes.com/m/somebody_i_used_to_know",
//         "img": "https://resizing.flixster.com/0y2352bSgHmHCMlAbmgMiJBmNXo=/fit-in/180x240/v2/https://resizing.flixster.com/qBzyOtQVLNHE5oJZKGgXQYNQ0Js=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkYjAwZjc5LWRiMmYtNDM1Yi1hYjE5LTJmMThhZTIzMGMzYi5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Alison Brie",
//             "Jay Ellis",
//             "Kiersey Clemons",
//             "Danny Pudi"
//         ],
//         "directedBy": [
//             "Dave Franco"
//         ]
//     },
//     {
//         "id": 15,
//         "title": "Avatar: The Way of Water",
//         "url": "https://www.rottentomatoes.com/m/avatar_the_way_of_water",
//         "img": "https://resizing.flixster.com/n2hcnjB7kowhKgEBV8-TeBeL6Js=/fit-in/180x240/v2/https://resizing.flixster.com/gWWM2Ov0VLAuazwELZCVc9grUQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyMGM0ZDJiLWNmYjAtNGI3NS1hYTgzLTQ5YmU2ZjQwZWE0ZC5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Sam Worthington",
//             "Zoe Saldaña",
//             "Sigourney Weaver",
//             "Stephen Lang"
//         ],
//         "directedBy": [
//             "James Cameron"
//         ]
//     },
//     {
//         "id": 16,
//         "title": "The Menu",
//         "url": "https://www.rottentomatoes.com/m/the_menu",
//         "img": "https://resizing.flixster.com/paM60Yir6K6M3X5D1Bnr7ZqTTac=/fit-in/180x240/v2/https://resizing.flixster.com/ThP55y9O__xdEFFCmmJ0pDy9FeI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FlZTkwYTAyLWNkNWYtNDA0ZS04N2FhLTE0NDUwZmM0ODdiOC5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Ralph Fiennes",
//             "Anya Taylor-Joy",
//             "Nicholas Hoult",
//             "Hong Chau"
//         ],
//         "directedBy": [
//             "Mark Mylod"
//         ]
//     },
//     {
//         "id": 17,
//         "title": "Everything Everywhere All at Once",
//         "url": "https://www.rottentomatoes.com/m/everything_everywhere_all_at_once",
//         "img": "https://resizing.flixster.com/YEtJo5X13brZTogcU54WYk-lEbI=/fit-in/180x240/v2/https://resizing.flixster.com/mx-agGjjsUK1QMyuv3AJhHI3hgo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3ZjU2MGU1LWMxODItNDlkMC1hYzJhLTY2YzMwOGZkMDhiZi5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Michelle Yeoh",
//             "Stephanie Hsu",
//             "Ke Huy Quan",
//             "James Hong"
//         ],
//         "directedBy": [
//             "Daniel Kwan",
//             "Daniel Scheinert"
//         ]
//     },
//     {
//         "id": 18,
//         "title": "A Man Called Otto",
//         "url": "https://www.rottentomatoes.com/m/a_man_called_otto",
//         "img": "https://resizing.flixster.com/vVUWQMLIueGcmqsLjpPutdey_yI=/fit-in/180x240/v2/https://resizing.flixster.com/l3hMOt6cWOpnE-s2f9ryvvFRwdM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxYjJlNGIwLWE1YWMtNDU0NC05NDc3LTVkMTUwYWMyZGIyNy5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Tom Hanks",
//             "Mack Bayda",
//             "Mariana Treviño",
//             "Rachel Keller"
//         ],
//         "directedBy": [
//             "Marc Forster"
//         ]
//     },
//     {
//         "id": 19,
//         "title": "Infinity Pool",
//         "url": "https://www.rottentomatoes.com/m/infinity_pool_2023",
//         "img": "https://resizing.flixster.com/j9DGVD1R2to_YiFNbI8ziivTTs0=/fit-in/180x240/v2/https://resizing.flixster.com/P6s0RlGDQvFmVgWgdBbyuAZwHMU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFhZjcxYTQ3LTExY2UtNDUxNy05NTI5LWI2ZjhkMGY1ODg1MS5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Alexander Skarsgård",
//             "Mia Goth",
//             "Cleopatra Coleman",
//             "Thomas Kretschmann"
//         ],
//         "directedBy": [
//             "Brandon Cronenberg"
//         ]
//     },
//     {
//         "id": 20,
//         "title": "Missing",
//         "url": "https://www.rottentomatoes.com/m/missing_2023",
//         "img": "https://resizing.flixster.com/A1neBopo4y_faDvSsN56QB4aI5A=/fit-in/180x240/v2/https://resizing.flixster.com/RTX_Ec72Imig92mBwROA1C-YFTE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzExOGNjY2MyLTg0MTctNDBmMS1hYTFhLWNmZWU5ZTVjNDg5NS5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Storm Reid",
//             "Joaquim de Almeida",
//             "Ken Leung",
//             "Amy Landecker"
//         ],
//         "directedBy": [
//             "Will Merrick",
//             "Nick Johnson"
//         ]
//     },
//     {
//         "id": 21,
//         "title": "The Whale",
//         "url": "https://www.rottentomatoes.com/m/the_whale_2022",
//         "img": "https://resizing.flixster.com/PDrK0zFj3N6Mg6rufovI7Phh1jc=/fit-in/180x240/v2/https://resizing.flixster.com/k4O2dPmx9brEPScWUiuFiayMHpo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3ODEzY2Q4LTc4YWEtNDQ0OC1hNGQ0LTU0NGQzZWJjMzNhMy5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Brendan Fraser",
//             "Sadie Sink",
//             "Hong Chau",
//             "Ty Simpkins"
//         ],
//         "directedBy": [
//             "Darren Aronofsky"
//         ]
//     },
//     {
//         "id": 22,
//         "title": "Empire of Light",
//         "url": "https://www.rottentomatoes.com/m/empire_of_light",
//         "img": "https://resizing.flixster.com/ZuCzmzKakKrlf-t1B909KdP3D2E=/fit-in/180x240/v2/https://resizing.flixster.com/zHNGBsas3_aRsBnBAlLRdxdg3lA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlNTZkMzljLTQ2ZDctNGQ2Yy04ZGNlLWU4ZTNjNGZkZmQxNi5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Olivia Colman",
//             "Micheal Ward",
//             "Colin Firth",
//             "Toby Jones"
//         ],
//         "directedBy": [
//             "Sam Mendes"
//         ]
//     },
//     {
//         "id": 23,
//         "title": "Tár",
//         "url": "https://www.rottentomatoes.com/m/tar_2022",
//         "img": "https://resizing.flixster.com/hii0QV_oX-zs2xcuyf1WmGRfxNU=/fit-in/180x240/v2/https://resizing.flixster.com/wFUHH4yTM6tmK4R-0f6pCrCPpB0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBlZGZjZWM1LTVkNmMtNDYzZC1iNjc0LTYwNDY0YTkzYTExYy5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Cate Blanchett",
//             "Noémie Merlant",
//             "Nina Hoss",
//             "Sophie Kauer"
//         ],
//         "directedBy": [
//             "Todd Field"
//         ]
//     },
//     {
//         "id": 24,
//         "title": "The Fabelmans",
//         "url": "https://www.rottentomatoes.com/m/the_fabelmans",
//         "img": "https://resizing.flixster.com/H_9Itn_haLI0RzlXf9wRdv6wdi4=/fit-in/180x240/v2/https://resizing.flixster.com/sHWlKXB2LojbyFEGXuLICWYopdI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3Y2Y3MTk3LWZkMWUtNGNjNS04YzY0LWI0YjNlNDNmYTRhNC5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Michelle Williams",
//             "Paul Dano",
//             "Seth Rogen",
//             "Gabriel LaBelle"
//         ],
//         "directedBy": [
//             "Steven Spielberg"
//         ]
//     },
//     {
//         "id": 25,
//         "title": "They Wait in the Dark",
//         "url": "https://www.rottentomatoes.com/m/they_wait_in_the_dark",
//         "img": "https://resizing.flixster.com/UiozV11DPn8WuXIKNl7lGdkdhTY=/fit-in/180x240/v2/https://resizing.flixster.com/aP9FbzvzhqAj24RZE2lMm2O60_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmOTQ3NDM5LTZlMmMtNDJiMi1iNmJmLTJhYWI5MDZkMjUzZi5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Sarah McGuire",
//             "Laurie Catherine Winkel",
//             "Paige Maria",
//             "Patrick McGee"
//         ],
//         "directedBy": [
//             "Patrick Rea"
//         ]
//     },
//     {
//         "id": 26,
//         "title": "Pamela, a Love Story",
//         "url": "https://www.rottentomatoes.com/m/pamela_a_love_story",
//         "img": "https://resizing.flixster.com/sdPjx7XXgj_4eikE-v5-w3YKQ6U=/fit-in/180x240/v2/https://resizing.flixster.com/rK4q8Us5dBBJRPOlDXXdMpSm4AQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzZmJhZDQ5LWRkYjUtNDFkZi05YWM4LTk5YWJlNDgxZWI1Ny5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Pamela Anderson"
//         ],
//         "directedBy": [
//             "Ryan White"
//         ]
//     },
//     {
//         "id": 27,
//         "title": "All Quiet on the Western Front",
//         "url": "https://www.rottentomatoes.com/m/all_quiet_on_the_western_front_2022",
//         "img": "https://resizing.flixster.com/6sqa_k4rmkQ5YsXgP7uILv46jPg=/fit-in/180x240/v2/https://resizing.flixster.com/Tv-nj_XzcvU5GZthFm-0xrSvvjo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljM2U3Mjk3LWExNzgtNGE2NS05OTMxLWVlZmU1NzNlZWM5MS5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Felix Kammerer",
//             "Albrecht Schuch",
//             "Aaron Hilmer",
//             "Moritz Klaus"
//         ],
//         "directedBy": [
//             "Edward Berger"
//         ]
//     },
//     {
//         "id": 28,
//         "title": "Triangle of Sadness",
//         "url": "https://www.rottentomatoes.com/m/triangle_of_sadness",
//         "img": "https://resizing.flixster.com/VXfzKX974mfVjy9PhG-LbP_5cPs=/fit-in/180x240/v2/https://resizing.flixster.com/z6ABTqY9Z_hs2mKAokadKfuTHyg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI5NTZjNDYwLWFkNDgtNDhlZC05OWE5LWZlYzRhMjgwZDJjMC5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Harris Dickinson",
//             "Charlbi Dean",
//             "Woody Harrelson",
//             "Dolly De Leon"
//         ],
//         "directedBy": [
//             "Ruben Östlund"
//         ]
//     },
//     {
//         "id": 29,
//         "title": "Shotgun Wedding",
//         "url": "https://www.rottentomatoes.com/m/shotgun_wedding_2022",
//         "img": "https://resizing.flixster.com/rJcqztO8ZVS4ofnZXpjNoimWF-s=/fit-in/180x240/v2/https://resizing.flixster.com/ZNvNNPunUvrh94KGHshXm5sNiWU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U1NDgxNjljLWQ2OTctNDMzZi05NzI3LWJkMmVhYTZlMThmZC5qcGc=",
//         "year": "2023",
//         "starring": [
//             "Jennifer Lopez",
//             "Josh Duhamel",
//             "Jennifer Coolidge",
//             "Sonia Braga"
//         ],
//         "directedBy": [
//             "Jason Moore"
//         ]
//     },
//     {
//         "id": 30,
//         "title": "Aftersun",
//         "url": "https://www.rottentomatoes.com/m/aftersun",
//         "img": "https://resizing.flixster.com/h8LwbuiZgNZQhZ65PwjHajIUSPA=/fit-in/180x240/v2/https://resizing.flixster.com/dLAtEC7GySsgPdWZKx-cPCV6KBY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q3NWQwM2U2LWJkNTctNDNjOC04ODhiLTNlYjI1MGI0YmI4ZS5qcGc=",
//         "year": "2022",
//         "starring": [
//             "Paul Mescal",
//             "Frankie Corio",
//             "Celia Rowlson-Hall",
//             "Kayleigh Coleman"
//         ],
//         "directedBy": [
//             "Charlotte Wells"
//         ]
//     }
// ]

// export default movieData

const movieData = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    url: "https://www.rottentomatoes.com/m/guardians_of_the_galaxy_vol_3",
    img: "https://resizing.flixster.com/5seKiRmH981Y2amg0vmHmj5WnXo=/fit-in/180x240/v2/https://resizing.flixster.com/p8g-u3ZgPuxrg4x7aq1tidyffGg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZDg0OTc0LWVkMTktNDVhYS05ODljLTNkMjYxMjA0OTdjMy5qcGc=",
    year: "2023",
    starring: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Karen Gillan"],
    directedBy: ["James Gunn"],
  },
  {
    id: 2,
    title: "Dungeons & Dragons: Honor Among Thieves",
    url: "https://www.rottentomatoes.com/m/dungeons_and_dragons_honor_among_thieves",
    img: "https://resizing.flixster.com/IwFK1YWt1-pAzhnGdY9KTLLjEQM=/fit-in/180x240/v2/https://resizing.flixster.com/eWLvyboOEGZRS2JiBDZ6eRD4Hps=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU2MTc5YzE5LTc3YjktNDIyMS05ZWZhLTNlNzBjZmZkM2JlMS5qcGc=",
    year: "2023",
    starring: [
      "Chris Pine",
      "Michelle Rodriguez",
      "Regé-Jean Page",
      "Justice Jesse Smith",
    ],
    directedBy: ["Jonathan M. Goldstein", "John Francis Daley"],
  },
  {
    id: 3,
    title: "Peter Pan & Wendy",
    url: "https://www.rottentomatoes.com/m/peter_pan_and_wendy",
    img: "https://resizing.flixster.com/yUjbuHdhJI60p_rjKYe-h09vZyM=/fit-in/180x240/v2/https://resizing.flixster.com/VWUm7CchIbz-vWynjdE9q0l3OvU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2OGI1M2FmLWYxZDctNDQxYS04N2ViLThmOTRiNzYwMWUzMC5qcGc=",
    year: "2023",
    starring: [
      "Alexander Molony",
      "Ever Anderson",
      "Jude Law",
      "Alyssa Wapanatâhk",
    ],
    directedBy: ["David Lowery"],
  },
  {
    id: 4,
    title: "The Super Mario Bros. Movie",
    url: "https://www.rottentomatoes.com/m/the_super_mario_bros_movie",
    img: "https://resizing.flixster.com/-NKi376avuUz6vzaZgW5z4dBkxE=/fit-in/180x240/v2/https://resizing.flixster.com/nQN8KYVFA4fD23Li3TCLwKYz8GA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlYWVjZDdiLTMyYjMtNDgzNy1iN2M0LTgzYWZkODIzMmZmOS5qcGc=",
    year: "2023",
    starring: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
    directedBy: ["Aaron Horvath", "Michael Jelenic"],
  },
  {
    id: 5,
    title: "Are You There God? It's Me, Margaret.",
    url: "https://www.rottentomatoes.com/m/are_you_there_god_its_me_margaret",
    img: "https://resizing.flixster.com/wx23zKc13hf4rQKR9gdL2T8LA5k=/fit-in/180x240/v2/https://resizing.flixster.com/iOBz-fQyXc6eRWGuSH5d42dsHT0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4YzRmNjcwLTUxOWUtNDJkZi05NmYyLTVjN2MyNDdjNzdiNy5qcGc=",
    year: "2023",
    starring: [
      "Rachel McAdams",
      "Abby Ryder Fortson",
      "Elle Graham",
      "Ben Safdie",
    ],
    directedBy: ["Kelly Fremon Craig"],
  },
  {
    id: 6,
    title: "Evil Dead Rise",
    url: "https://www.rottentomatoes.com/m/evil_dead_rise",
    img: "https://resizing.flixster.com/TWYzWG7xYYms3pGenxWgI3nyErw=/fit-in/180x240/v2/https://resizing.flixster.com/rWoHzijYNZv7RJb5P7BQQoGOo80=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U2YzliZDFjLWI2NTUtNDFmMi04OTUzLTUwNGFlOTRkOWIyNy5qcGc=",
    year: "2023",
    starring: [
      "Lily Sullivan",
      "Alyssa Sutherland",
      "Morgan Davies",
      "Gabrielle Echols",
    ],
    directedBy: ["Lee Cronin"],
  },
  {
    id: 7,
    title: "Renfield",
    url: "https://www.rottentomatoes.com/m/renfield",
    img: "https://resizing.flixster.com/mm70RwQfr50zB-xgihilC_1mQOU=/fit-in/180x240/v2/https://resizing.flixster.com/T4HHyueGWhklRu6uZss1jA5PiTY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAwODEwNjcxLTFjZWMtNDJlNC1hOGI2LWIwNzlkZjg3MjFlNS5qcGc=",
    year: "2023",
    starring: ["Nicolas Cage", "Nicholas Hoult", "Awkwafina", "Ben Schwartz"],
    directedBy: ["Chris McKay"],
  },
  {
    id: 8,
    title: "Sisu",
    url: "https://www.rottentomatoes.com/m/sisu_2022",
    img: "https://resizing.flixster.com/YVJ8IbGr48YrXZwFhXl9tgvZUpk=/fit-in/180x240/v2/https://resizing.flixster.com/LUMlPb01hdWx1gtuOyg1fs2kMyI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M0NjVmNThhLTI3MDctNDkwOS1iZDA4LTE1YmQwODE3Yzc1Ni5wbmc=",
    year: "2022",
    starring: [
      "Jorma Tommila",
      "Aksel Hennie",
      "Jack Doolan",
      "Mimosa Willamo",
    ],
    directedBy: ["Jalmari Helander"],
  },
  {
    id: 9,
    title: "Love Again",
    url: "https://www.rottentomatoes.com/m/love_again_2023",
    img: "https://resizing.flixster.com/rAhrlCahH06bq3-NCh3bXSCqJUc=/fit-in/180x240/v2/https://resizing.flixster.com/alOakbJDC5a_0QVvjWpTc2KZanQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI4OWUyNDQ1LTE4MWQtNGFlZC1iM2Q5LWYyMzcwZDBmOTlhOC5qcGc=",
    year: "2023",
    starring: [
      "Priyanka Chopra Jonas",
      "Sam Heughan",
      "Céline Dion",
      "Russell Tovey",
    ],
    directedBy: ["James C. Strouse"],
  },
  {
    id: 10,
    title: "Guardians of the Galaxy",
    url: "https://www.rottentomatoes.com/m/guardians_of_the_galaxy",
    img: "https://resizing.flixster.com/7H4GbcaDT6cXBE83fuTtMKSpBI0=/fit-in/180x240/v2/https://resizing.flixster.com/SneFHH-BDOhBkh7h1A-aNwcrxLM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3YTY2YTQzLTU5NDgtNDNiMC04ZTI1LTFiZDYyMTMxMjc5MC5qcGc=",
    year: "2014",
    starring: ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel"],
    directedBy: ["James Gunn"],
  },
  {
    id: 11,
    title: "The Artifice Girl",
    url: "https://www.rottentomatoes.com/m/the_artifice_girl",
    img: "https://resizing.flixster.com/bDVwK7DqQVdvMd7kvJR0IxL0hWI=/fit-in/180x240/v2/https://resizing.flixster.com/LNpanjbzPIvazihVyRU3uwEYccc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QyZjI4Zjc5LTg2NGQtNGZiZS05MmUxLTI0ZGMwODI3M2M0OS5qcGc=",
    year: "2022",
    starring: [
      "Tatum Matthews",
      "David Girard",
      "Sinda Nichols",
      "Franklin Ritch",
    ],
    directedBy: ["Franklin Ritch"],
  },
  {
    id: 12,
    title: "Beau Is Afraid",
    url: "https://www.rottentomatoes.com/m/beau_is_afraid",
    img: "https://resizing.flixster.com/WyAf-x6RifmVU8SaqqqYHpW5N8w=/fit-in/180x240/v2/https://resizing.flixster.com/QdFUG32U5gyx2uVinx5asNZTgyQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzczMjQ1ZWQ3LTZhOGMtNDIyYi05NGU5LTk3ZGYyMTYzN2IxNS5qcGc=",
    year: "2023",
    starring: ["Joaquin Phoenix", "Nathan Lane", "Amy Ryan", "Parker Posey"],
    directedBy: ["Ari Aster"],
  },
  {
    id: 13,
    title: "A Man Called Otto",
    url: "https://www.rottentomatoes.com/m/a_man_called_otto",
    img: "https://resizing.flixster.com/vVUWQMLIueGcmqsLjpPutdey_yI=/fit-in/180x240/v2/https://resizing.flixster.com/l3hMOt6cWOpnE-s2f9ryvvFRwdM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxYjJlNGIwLWE1YWMtNDU0NC05NDc3LTVkMTUwYWMyZGIyNy5qcGc=",
    year: "2022",
    starring: ["Tom Hanks", "Mack Bayda", "Mariana Treviño", "Rachel Keller"],
    directedBy: ["Marc Forster"],
  },
  {
    id: 14,
    title: "Guy Ritchie's The Covenant",
    url: "https://www.rottentomatoes.com/m/guy_ritchies_the_covenant",
    img: "https://resizing.flixster.com/ofKFW_J0N4i7oo_Zg4XdBQ_uzuA=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p23680547_p_v8_aa.jpg",
    year: "2023",
    starring: [
      "Jake Gyllenhaal",
      "Dar Salim",
      "Antony Starr",
      "Alexander Ludwig",
    ],
    directedBy: ["Guy Ritchie"],
  },
  {
    id: 15,
    title: "Ghosted",
    url: "https://www.rottentomatoes.com/m/ghosted_2023",
    img: "https://resizing.flixster.com/F_KYTBylpfRC_qfGgLIeSDCfyi0=/fit-in/180x240/v2/https://resizing.flixster.com/b-IiMmd59d7GxQeGfXt2_0GIaD0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg0ZTc3NWY1LTFmNWMtNGZkNi1hYjIwLWIzMjkyNDYwNDczNi5wbmc=",
    year: "2023",
    starring: ["Chris Evans", "Ana de Armas", "Adrien Brody", "Mike Moh"],
    directedBy: ["Dexter Fletcher"],
  },
  {
    id: 16,
    title: "Nefarious",
    url: "https://www.rottentomatoes.com/m/nefarious_2023",
    img: "https://resizing.flixster.com/6gGCM-Sh-mUSLoirOlKs-RplQlY=/fit-in/180x240/v2/https://resizing.flixster.com/CoV9h8uAjRfrx5fFGDo-BSKvbWk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIxY2NmYmU1LWJkZjUtNDE0MC1iNTlhLTY3OTFmZDRlMmE0NC5qcGc=",
    year: "2023",
    starring: [
      "Sean Patrick Flanery",
      "Jordan Belfi",
      "Tom Ohmer",
      "James Healy Jr.",
    ],
    directedBy: ["Cary Solomon", "Chuck Konzelman"],
  },
  {
    id: 17,
    title: "Air",
    url: "https://www.rottentomatoes.com/m/air_2023",
    img: "https://resizing.flixster.com/ST_zNMZFnvhHGcCykyNBe18iF-A=/fit-in/180x240/v2/https://resizing.flixster.com/YCmO8jyzF8PEJ5djT_x4TiRAw7Y=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg0MjcwZGUyLTE4NzctNDgyMi05ZmI0LWM4OWJkZjgxMDMyMi5qcGc=",
    year: "2023",
    starring: ["Matt Damon", "Ben Affleck", "Jason Bateman", "Viola Davis"],
    directedBy: ["Ben Affleck"],
  },
  {
    id: 18,
    title: "John Wick: Chapter 4",
    url: "https://www.rottentomatoes.com/m/john_wick_chapter_4",
    img: "https://resizing.flixster.com/AplxvuaxmELPdwmen0mu3uivAlA=/fit-in/180x240/v2/https://resizing.flixster.com/ayiSi8HrUS3_i-Jkru1P2oMM58Q=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhiODAwYWIyLTM1MmItNGI1ZS1iOWQzLTdjZjAzMzI1MDc2Yy5qcGc=",
    year: "2023",
    starring: [
      "Keanu Reeves",
      "Donnie Yen Ji-Dan",
      "Bill Skarsgård",
      "Laurence Fishburne",
    ],
    directedBy: ["Chad Stahelski"],
  },
  {
    id: 19,
    title: "Cherry",
    url: "https://www.rottentomatoes.com/m/cherry_2022",
    img: "https://resizing.flixster.com/cz05ACPHmwdjqknSy_l6k6vc_-g=/fit-in/180x240/v2/https://resizing.flixster.com/FNT1CJCg1rLwF3_pM_x98BAxfdY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QzZTQ2OGYyLTBjYWUtNDc5Ny05OWFlLTczZDQyMzkzNjgzNS5qcGc=",
    year: "2022",
    starring: [
      "Alex Trewhitt",
      "Hannah Alline",
      "Angela Nicholas",
      "Joe Sachem",
    ],
    directedBy: ["Sophie Galibert"],
  },
  {
    id: 20,
    title: "A Thousand and One",
    url: "https://www.rottentomatoes.com/m/a_thousand_and_one",
    img: "https://resizing.flixster.com/BqfhTsztSgjQLQyu_dyJRPfqt8o=/fit-in/180x240/v2/https://resizing.flixster.com/KJx1vlpDupJIO72dtK0uAYglZok=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzkyNzI4MTJhLTU5Y2MtNDFiZi1iZTVmLTUyYWRkNmQwZDgxYS5qcGc=",
    year: "2023",
    starring: [
      "Teyana Taylor",
      "Aaron Kingsley Adetola",
      "Aven Courtney",
      "Josiah Cross",
    ],
    directedBy: ["A.V. Rockwell"],
  },
  {
    id: 21,
    title:
      "Big George Foreman: The Miraculous Story of the Once and Future Heavyweight Champion of the World",
    url: "https://www.rottentomatoes.com/m/big_george_foreman_the_miraculous_story_of_the_once_and_future_heavyweight_champion_of_the_world",
    img: "https://resizing.flixster.com/bRuwb_uTY3-qIP3fdLY-vYOMMew=/fit-in/180x240/v2/https://resizing.flixster.com/z6oKt8t0EjwC1NGYKS7PzPb2U68=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E4ZTNlNDRmLWQ5ODQtNDc0Yy1hY2NmLWI3Yzc5OGRiZThiZi5wbmc=",
    year: "2023",
    starring: [
      "Khris Davis",
      "Forest Whitaker",
      "Jasmine Mathews",
      "Sullivan Jones",
    ],
    directedBy: ["George Tillman Jr."],
  },
  {
    id: 22,
    title: "Scream VI",
    url: "https://www.rottentomatoes.com/m/scream_vi",
    img: "https://resizing.flixster.com/0djqHUvHt2KPc6yCTgFjvD-YBA4=/fit-in/180x240/v2/https://resizing.flixster.com/dbokT9ziX9XrMs2Ims1OnyLJYmI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk3ZmU4OTRlLWM5YTAtNDU3Ni04ODNiLWUxZDE1ZmY1MWQ3Yi5qcGc=",
    year: "2023",
    starring: [
      "Melissa Barrera",
      "Jenna Ortega",
      "Courteney Cox",
      "Jasmin Savoy Brown",
    ],
    directedBy: ["Matt Bettinelli-Olpin", "Tyler Gillett"],
  },
  {
    id: 23,
    title: "Leave No Trace",
    url: "https://www.rottentomatoes.com/m/leave_no_trace",
    img: "https://resizing.flixster.com/_W-aPvF4lhD6wPbg_lnsQCmPJf0=/fit-in/180x240/v2/https://resizing.flixster.com/qF1V53LvHZfdeJGYQt0E8jsTVg0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIyMWNhY2M3LWZjMTItNDdmOS1iYjZjLTM2NmVlNzA4NDc5NC53ZWJw",
    year: "2018",
    starring: ["Ben Foster", "Thomasin McKenzie", "Jeff Kober", "Dale Dickey"],
    directedBy: ["Debra Granik"],
  },
  {
    id: 24,
    title: "Clock",
    url: "https://www.rottentomatoes.com/m/clock_2023",
    img: "https://resizing.flixster.com/OHkXrX8Z9IWnYg3ql4gpLfcBmuM=/fit-in/180x240/v2/https://resizing.flixster.com/Yr1tMeVwrcXMmyOod8cPnMls32c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMzOWE2OWViLThkOTQtNDZjYS1iNTRkLTBkNGViOTRhNGNmMy5qcGc=",
    year: "2023",
    starring: ["Dianna Agron", "Melora Hardin", "Jay Ali", "Saul Rubinek"],
    directedBy: ["Alexis Jacknow"],
  },
  {
    id: 25,
    title: "Suzume",
    url: "https://www.rottentomatoes.com/m/suzume",
    img: "https://resizing.flixster.com/hVnX-9A1RhFcU587nxiI6R5-bs4=/fit-in/180x240/v2/https://resizing.flixster.com/zg3xSM8uDH5CXhrMDpZ-p4qhpp8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI3OGExOWVjLTIwNGEtNGRhNS1hMzIxLTE5OGFhYWNlOWRhOS5wbmc=",
    year: "2022",
    starring: [
      "Nanoka Hara",
      "Hokuto Matsumura",
      "Eri Fukatsu",
      "Hakuo Matsumoto II",
    ],
    directedBy: ["Makoto Shinkai"],
  },
  {
    id: 26,
    title: "What's Love Got to Do with It?",
    url: "https://www.rottentomatoes.com/m/whats_love_got_to_do_with_it_2023",
    img: "https://resizing.flixster.com/A0gsCl6n_u39vT3PkYoNm7CkvNs=/fit-in/180x240/v2/https://resizing.flixster.com/TfRd-g_MoJhaaKsguoYi5B9axqA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyMmNkN2ZjLTZjYjQtNDFhNy05YTU4LTc3NTkzZWYzYTFkMS5qcGc=",
    year: "2022",
    starring: ["Lily James", "Shazad Latif", "Emma Thompson", "Shabana Azmi"],
    directedBy: ["Shekhar Kapur"],
  },
  {
    id: 27,
    title: "Discontinued",
    url: "https://www.rottentomatoes.com/m/discontinued",
    img: "https://resizing.flixster.com/lxkgf8hG2Od8jkIJ3fmxjrDYswU=/fit-in/180x240/v2/https://resizing.flixster.com/oMsGfGM4ZwninOuyG8oNqjBXRPw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FjOGQ5YjA5LWU2MjItNGRjMi1hOTg4LWM0MzViMDM3MmY4YS5qcGc=",
    year: "2022",
    starring: [
      "Ashley Hutchinson",
      "Langston Fishburne",
      "Robert Picardo",
      "Charlie Talbert",
    ],
    directedBy: ["Trevor Peckham"],
  },
  {
    id: 28,
    title: "Above Suspicion",
    url: "https://www.rottentomatoes.com/m/above_suspicion_2021",
    img: "https://resizing.flixster.com/COHKBKZILuvRZPS28RTlYkorRy0=/fit-in/180x240/v2/https://resizing.flixster.com/sBuSy1kSk7JlkyEZK8IE3U5tFPA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmZWJkZjg1LThiNTMtNDQyYy1hMGY1LWY0MmQ1NzdjNTI5Yy5qcGc=",
    year: "2019",
    starring: [
      "Emilia Clarke",
      "Thora Birch",
      "Jack Huston",
      "Johnny Knoxville",
    ],
    directedBy: ["Phillip Noyce"],
  },
  {
    id: 29,
    title: "Dune",
    url: "https://www.rottentomatoes.com/m/dune_2021",
    img: "https://resizing.flixster.com/vAMXFndR8C7FvLvRw7d7OaZumQ8=/fit-in/180x240/v2/https://resizing.flixster.com/gcRn4_emLo1Iz5ndbvUOKDYq35c=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdhYTI2NDJkLTU5YTYtNDNkOS05ZWQxLWZiNjFlOTZmYjZlZS5qcGc=",
    year: "2021",
    starring: [
      "Timothée Chalamet",
      "Rebecca Ferguson",
      "Oscar Isaac",
      "Josh Brolin",
    ],
    directedBy: ["Denis Villeneuve"],
  },
  {
    id: 30,
    title: "65",
    url: "https://www.rottentomatoes.com/m/65",
    img: "https://resizing.flixster.com/OOgo6KlgcJ412GSkVhh85LXBEi0=/fit-in/180x240/v2/https://resizing.flixster.com/B3PKF59iChbIK81k7aF0tgkY8_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E4Yzc2ZmE2LWM5MGEtNDdkNS05MWY1LWY2ZDU0N2IwMjdlZi5qcGc=",
    year: "2023",
    starring: ["Adam Driver", "Ariana Greenblatt", "Chloe Coleman"],
    directedBy: ["Scott Beck", "Bryan Woods"],
  },
];

export default movieData;
