const movieData =[
    {
        "id": 1,
        "title": "Ant-Man and The Wasp: Quantumania",
        "url": "https://www.rottentomatoes.com/m/ant_man_and_the_wasp_quantumania",
        "img": "https://resizing.flixster.com/Kyz5hyQIexUuB2PjCgEn6HeLMZU=/fit-in/180x240/v2/https://resizing.flixster.com/_0Mhf0W_vdhwlaqOaUDX6JiReKA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE0OGY2MTIxLTE1MDEtNDI5YS1hYzVlLWYyMzExYjBmZTlhMC5qcGc=",
        "year": "2023",
        "starring": [
            "Paul Rudd",
            "Evangeline Lilly",
            "Jonathan Majors",
            "Bill Murray"
        ],
        "directedBy": [
            "Peyton Reed"
        ]
    },
    {
        "id": 2,
        "title": "Knock at the Cabin",
        "url": "https://www.rottentomatoes.com/m/knock_at_the_cabin",
        "img": "https://resizing.flixster.com/rxPJ1I5l8oei28YXkd2latAw8m0=/fit-in/180x240/v2/https://resizing.flixster.com/5dJGA-d38uNrcR2nDq1UmVBRuHc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4NDdmZDU3LWMxNTQtNDczOC04M2VkLTQzNzQ5NGVkODExZi5qcGc=",
        "year": "2023",
        "starring": [
            "Dave Bautista",
            "Jonathan Groff",
            "Ben Aldridge",
            "Nikki Amuka-Bird"
        ],
        "directedBy": [
            "M. Night Shyamalan"
        ]
    },
    {
        "id": 3,
        "title": "All That Breathes",
        "url": "https://www.rottentomatoes.com/m/all_that_breathes",
        "img": "https://resizing.flixster.com/q_7NUBztTbPiCnyUTXZm32hWr9o=/fit-in/180x240/v2/https://resizing.flixster.com/sP16cjgBL-XWStdPbig_SMF_kYs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMzYmQyMjk5LWMzMTYtNGY4OS1hOGU5LTMxZWNhMDBjZTgwNy5qcGc=",
        "year": "2022",
        "starring": [],
        "directedBy": [
            "Shaunak Sen"
        ]
    },
    {
        "id": 4,
        "title": "Your Place or Mine",
        "url": "https://www.rottentomatoes.com/m/your_place_or_mine_2023",
        "img": "https://resizing.flixster.com/VKmpnuxxOp5XDxgOY-L5KlGPCug=/fit-in/180x240/v2/https://resizing.flixster.com/boLnoOLSE8jn8Rk2vVsnIP2WIvg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2IwMThjNTU3LTM5MTUtNDNkZS1iOGU4LWYwMDhkMDg3NzgzMy5qcGc=",
        "year": "2023",
        "starring": [
            "Reese Witherspoon",
            "Ashton Kutcher",
            "Steve Zahn",
            "Wesley Kimmel"
        ],
        "directedBy": [
            "Aline Brosh McKenna"
        ]
    },
    {
        "id": 5,
        "title": "Magic Mike's Last Dance",
        "url": "https://www.rottentomatoes.com/m/magic_mikes_last_dance",
        "img": "https://resizing.flixster.com/4m4IdixT5f7aySeN0l3_FIFKC0I=/fit-in/180x240/v2/https://resizing.flixster.com/dSyi0qq5pZSCRC1VH_oo02R4QRE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRhMWZhYmFhLWFmODgtNDg1MC1hMTk5LWMwOTcyMDhjY2Y1YS5qcGc=",
        "year": "2023",
        "starring": [
            "Channing Tatum",
            "Salma Hayek",
            "Caitlin Gerard",
            "Gavin Spokes"
        ],
        "directedBy": [
            "Steven Soderbergh"
        ]
    },
    {
        "id": 6,
        "title": "Plane",
        "url": "https://www.rottentomatoes.com/m/plane",
        "img": "https://resizing.flixster.com/MCZVMmu066oFq26rnAueV0uF0rg=/fit-in/180x240/v2/https://resizing.flixster.com/96gGzEOuV_fOYF8NKCANgRXH3SI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUzN2ViMzg3LWNjNGUtNDFjZC1hMzZiLTgyYWEwOWIzZTdlZi5qcGc=",
        "year": "2023",
        "starring": [
            "Gerard Butler",
            "Mike Colter",
            "Yoson An",
            "Daniella Pineda"
        ],
        "directedBy": [
            "Jean-François Richet"
        ]
    },
    {
        "id": 7,
        "title": "M3GAN",
        "url": "https://www.rottentomatoes.com/m/m3gan",
        "img": "https://resizing.flixster.com/LMbScjDLUzsQLgeeoOF0FAhNcC8=/fit-in/180x240/v2/https://resizing.flixster.com/rPJASTXFjLpmiVTi3D6RGcq-skM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhjYjA0ODBiLTNlNmUtNDlhOS05ZWRlLThlOGQ2MmEyZjlmYS5qcGc=",
        "year": "2022",
        "starring": [
            "Allison Williams",
            "Violet McGraw",
            "Ronny Chieng",
            "Brian Jordan Alvarez"
        ],
        "directedBy": [
            "Gerard Johnstone"
        ]
    },
    {
        "id": 8,
        "title": "You People",
        "url": "https://www.rottentomatoes.com/m/you_people_2023",
        "img": "https://resizing.flixster.com/fd5FRTShNXhXCnrMGVQE-tB4IgI=/fit-in/180x240/v2/https://resizing.flixster.com/aGnQYra1iGiD80rvz89jeaAvSWo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ViNTY4YzYwLTA0YjMtNDRlMS04YjllLTUyZWQ4ZmRjOGRiYi5qcGc=",
        "year": "2023",
        "starring": [
            "Jonah Hill",
            "Lauren London",
            "Eddie Murphy",
            "Julia Louis-Dreyfus"
        ],
        "directedBy": [
            "Kenya Barris"
        ]
    },
    {
        "id": 9,
        "title": "Puss in Boots: The Last Wish",
        "url": "https://www.rottentomatoes.com/m/puss_in_boots_the_last_wish",
        "img": "https://resizing.flixster.com/SScFkb_uOTYce9WEQrSiGeJtMXE=/fit-in/180x240/v2/https://resizing.flixster.com/vtIcjOYiM-QBXQyXhTFFgQoRkDw=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JmNjM3ZTc2LTk5ZmMtNGJhNy04MDAzLWI3M2IxNmExNDNkYi5qcGc=",
        "year": "2022",
        "starring": [
            "Antonio Banderas",
            "Salma Hayek",
            "Olivia Colman",
            "Harvey Guillen"
        ],
        "directedBy": [
            "Joel Crawford"
        ]
    },
    {
        "id": 10,
        "title": "The Banshees of Inisherin",
        "url": "https://www.rottentomatoes.com/m/the_banshees_of_inisherin",
        "img": "https://resizing.flixster.com/38PH-W8opo0IaZfagCCFJtTq-_8=/fit-in/180x240/v2/https://resizing.flixster.com/SqYohHz5ela5G1qTZ8aKYunK2Oo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzc4ZjI3ZDBiLTkwMDktNDVkZC1hZmI5LTJiNDdjNWRmZDVjOC5qcGc=",
        "year": "2022",
        "starring": [
            "Colin Farrell",
            "Brendan Gleeson",
            "Kerry Condon",
            "Barry Keoghan"
        ],
        "directedBy": [
            "Martin McDonagh"
        ]
    },
    {
        "id": 11,
        "title": "Black Panther: Wakanda Forever",
        "url": "https://www.rottentomatoes.com/m/black_panther_wakanda_forever",
        "img": "https://resizing.flixster.com/459b5JEuNlUflNrebS0a807KMYI=/fit-in/180x240/v2/https://resizing.flixster.com/QJkeIM6LIvwmRGiLKrNBcpZIk8M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzAwYzExZjlmLWJlODQtNDY4Mi1iNDhkLWU2YWNmMGIyMDgwMi5qcGc=",
        "year": "2022",
        "starring": [
            "Letitia Wright",
            "Angela Bassett",
            "Lupita Nyong'o",
            "Tenoch Huerta"
        ],
        "directedBy": [
            "Ryan Coogler"
        ]
    },
    {
        "id": 12,
        "title": "80 for Brady",
        "url": "https://www.rottentomatoes.com/m/80_for_brady",
        "img": "https://resizing.flixster.com/qoAJ6c2ANdlSkO8NNnQLj3hkzkI=/fit-in/180x240/v2/https://resizing.flixster.com/D7qwW_u23xMtpwTt78eNVmVLFuI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2I4Mzk4ZTkzLTYzZjktNGI0My05OTYwLWIzZjIxMDkwMTQwNC5qcGc=",
        "year": "2023",
        "starring": [
            "Lily Tomlin",
            "Jane Fonda",
            "Rita Moreno",
            "Sally Field"
        ],
        "directedBy": [
            "Kyle Marvin"
        ]
    },
    {
        "id": 13,
        "title": "Babylon",
        "url": "https://www.rottentomatoes.com/m/babylon_2022",
        "img": "https://resizing.flixster.com/DU80S4HnJFcuinUzwoq0WZiCWro=/fit-in/180x240/v2/https://resizing.flixster.com/dEbrJa07LETKJiiO54Tqxb-ImXk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5OTE0OTdhLWQ1MTAtNDgyMS04M2YzLTdkNmVjZDYxNmZlMy5qcGc=",
        "year": "2022",
        "starring": [
            "Brad Pitt",
            "Margot Robbie",
            "Diego Calva",
            "Jean Smart"
        ],
        "directedBy": [
            "Damien Chazelle"
        ]
    },
    {
        "id": 14,
        "title": "Somebody I Used To Know",
        "url": "https://www.rottentomatoes.com/m/somebody_i_used_to_know",
        "img": "https://resizing.flixster.com/0y2352bSgHmHCMlAbmgMiJBmNXo=/fit-in/180x240/v2/https://resizing.flixster.com/qBzyOtQVLNHE5oJZKGgXQYNQ0Js=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZkYjAwZjc5LWRiMmYtNDM1Yi1hYjE5LTJmMThhZTIzMGMzYi5qcGc=",
        "year": "2023",
        "starring": [
            "Alison Brie",
            "Jay Ellis",
            "Kiersey Clemons",
            "Danny Pudi"
        ],
        "directedBy": [
            "Dave Franco"
        ]
    },
    {
        "id": 15,
        "title": "Avatar: The Way of Water",
        "url": "https://www.rottentomatoes.com/m/avatar_the_way_of_water",
        "img": "https://resizing.flixster.com/n2hcnjB7kowhKgEBV8-TeBeL6Js=/fit-in/180x240/v2/https://resizing.flixster.com/gWWM2Ov0VLAuazwELZCVc9grUQI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzgyMGM0ZDJiLWNmYjAtNGI3NS1hYTgzLTQ5YmU2ZjQwZWE0ZC5qcGc=",
        "year": "2022",
        "starring": [
            "Sam Worthington",
            "Zoe Saldaña",
            "Sigourney Weaver",
            "Stephen Lang"
        ],
        "directedBy": [
            "James Cameron"
        ]
    },
    {
        "id": 16,
        "title": "The Menu",
        "url": "https://www.rottentomatoes.com/m/the_menu",
        "img": "https://resizing.flixster.com/paM60Yir6K6M3X5D1Bnr7ZqTTac=/fit-in/180x240/v2/https://resizing.flixster.com/ThP55y9O__xdEFFCmmJ0pDy9FeI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FlZTkwYTAyLWNkNWYtNDA0ZS04N2FhLTE0NDUwZmM0ODdiOC5qcGc=",
        "year": "2022",
        "starring": [
            "Ralph Fiennes",
            "Anya Taylor-Joy",
            "Nicholas Hoult",
            "Hong Chau"
        ],
        "directedBy": [
            "Mark Mylod"
        ]
    },
    {
        "id": 17,
        "title": "Everything Everywhere All at Once",
        "url": "https://www.rottentomatoes.com/m/everything_everywhere_all_at_once",
        "img": "https://resizing.flixster.com/YEtJo5X13brZTogcU54WYk-lEbI=/fit-in/180x240/v2/https://resizing.flixster.com/mx-agGjjsUK1QMyuv3AJhHI3hgo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3ZjU2MGU1LWMxODItNDlkMC1hYzJhLTY2YzMwOGZkMDhiZi5qcGc=",
        "year": "2022",
        "starring": [
            "Michelle Yeoh",
            "Stephanie Hsu",
            "Ke Huy Quan",
            "James Hong"
        ],
        "directedBy": [
            "Daniel Kwan",
            "Daniel Scheinert"
        ]
    },
    {
        "id": 18,
        "title": "A Man Called Otto",
        "url": "https://www.rottentomatoes.com/m/a_man_called_otto",
        "img": "https://resizing.flixster.com/vVUWQMLIueGcmqsLjpPutdey_yI=/fit-in/180x240/v2/https://resizing.flixster.com/l3hMOt6cWOpnE-s2f9ryvvFRwdM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQxYjJlNGIwLWE1YWMtNDU0NC05NDc3LTVkMTUwYWMyZGIyNy5qcGc=",
        "year": "2022",
        "starring": [
            "Tom Hanks",
            "Mack Bayda",
            "Mariana Treviño",
            "Rachel Keller"
        ],
        "directedBy": [
            "Marc Forster"
        ]
    },
    {
        "id": 19,
        "title": "Infinity Pool",
        "url": "https://www.rottentomatoes.com/m/infinity_pool_2023",
        "img": "https://resizing.flixster.com/j9DGVD1R2to_YiFNbI8ziivTTs0=/fit-in/180x240/v2/https://resizing.flixster.com/P6s0RlGDQvFmVgWgdBbyuAZwHMU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzFhZjcxYTQ3LTExY2UtNDUxNy05NTI5LWI2ZjhkMGY1ODg1MS5qcGc=",
        "year": "2023",
        "starring": [
            "Alexander Skarsgård",
            "Mia Goth",
            "Cleopatra Coleman",
            "Thomas Kretschmann"
        ],
        "directedBy": [
            "Brandon Cronenberg"
        ]
    },
    {
        "id": 20,
        "title": "Missing",
        "url": "https://www.rottentomatoes.com/m/missing_2023",
        "img": "https://resizing.flixster.com/A1neBopo4y_faDvSsN56QB4aI5A=/fit-in/180x240/v2/https://resizing.flixster.com/RTX_Ec72Imig92mBwROA1C-YFTE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzExOGNjY2MyLTg0MTctNDBmMS1hYTFhLWNmZWU5ZTVjNDg5NS5qcGc=",
        "year": "2023",
        "starring": [
            "Storm Reid",
            "Joaquim de Almeida",
            "Ken Leung",
            "Amy Landecker"
        ],
        "directedBy": [
            "Will Merrick",
            "Nick Johnson"
        ]
    },
    {
        "id": 21,
        "title": "The Whale",
        "url": "https://www.rottentomatoes.com/m/the_whale_2022",
        "img": "https://resizing.flixster.com/PDrK0zFj3N6Mg6rufovI7Phh1jc=/fit-in/180x240/v2/https://resizing.flixster.com/k4O2dPmx9brEPScWUiuFiayMHpo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3ODEzY2Q4LTc4YWEtNDQ0OC1hNGQ0LTU0NGQzZWJjMzNhMy5qcGc=",
        "year": "2022",
        "starring": [
            "Brendan Fraser",
            "Sadie Sink",
            "Hong Chau",
            "Ty Simpkins"
        ],
        "directedBy": [
            "Darren Aronofsky"
        ]
    },
    {
        "id": 22,
        "title": "Empire of Light",
        "url": "https://www.rottentomatoes.com/m/empire_of_light",
        "img": "https://resizing.flixster.com/ZuCzmzKakKrlf-t1B909KdP3D2E=/fit-in/180x240/v2/https://resizing.flixster.com/zHNGBsas3_aRsBnBAlLRdxdg3lA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2JlNTZkMzljLTQ2ZDctNGQ2Yy04ZGNlLWU4ZTNjNGZkZmQxNi5qcGc=",
        "year": "2022",
        "starring": [
            "Olivia Colman",
            "Micheal Ward",
            "Colin Firth",
            "Toby Jones"
        ],
        "directedBy": [
            "Sam Mendes"
        ]
    },
    {
        "id": 23,
        "title": "Tár",
        "url": "https://www.rottentomatoes.com/m/tar_2022",
        "img": "https://resizing.flixster.com/hii0QV_oX-zs2xcuyf1WmGRfxNU=/fit-in/180x240/v2/https://resizing.flixster.com/wFUHH4yTM6tmK4R-0f6pCrCPpB0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzBlZGZjZWM1LTVkNmMtNDYzZC1iNjc0LTYwNDY0YTkzYTExYy5qcGc=",
        "year": "2022",
        "starring": [
            "Cate Blanchett",
            "Noémie Merlant",
            "Nina Hoss",
            "Sophie Kauer"
        ],
        "directedBy": [
            "Todd Field"
        ]
    },
    {
        "id": 24,
        "title": "The Fabelmans",
        "url": "https://www.rottentomatoes.com/m/the_fabelmans",
        "img": "https://resizing.flixster.com/H_9Itn_haLI0RzlXf9wRdv6wdi4=/fit-in/180x240/v2/https://resizing.flixster.com/sHWlKXB2LojbyFEGXuLICWYopdI=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA3Y2Y3MTk3LWZkMWUtNGNjNS04YzY0LWI0YjNlNDNmYTRhNC5qcGc=",
        "year": "2022",
        "starring": [
            "Michelle Williams",
            "Paul Dano",
            "Seth Rogen",
            "Gabriel LaBelle"
        ],
        "directedBy": [
            "Steven Spielberg"
        ]
    },
    {
        "id": 25,
        "title": "They Wait in the Dark",
        "url": "https://www.rottentomatoes.com/m/they_wait_in_the_dark",
        "img": "https://resizing.flixster.com/UiozV11DPn8WuXIKNl7lGdkdhTY=/fit-in/180x240/v2/https://resizing.flixster.com/aP9FbzvzhqAj24RZE2lMm2O60_8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZmOTQ3NDM5LTZlMmMtNDJiMi1iNmJmLTJhYWI5MDZkMjUzZi5qcGc=",
        "year": "2022",
        "starring": [
            "Sarah McGuire",
            "Laurie Catherine Winkel",
            "Paige Maria",
            "Patrick McGee"
        ],
        "directedBy": [
            "Patrick Rea"
        ]
    },
    {
        "id": 26,
        "title": "Pamela, a Love Story",
        "url": "https://www.rottentomatoes.com/m/pamela_a_love_story",
        "img": "https://resizing.flixster.com/sdPjx7XXgj_4eikE-v5-w3YKQ6U=/fit-in/180x240/v2/https://resizing.flixster.com/rK4q8Us5dBBJRPOlDXXdMpSm4AQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YzZmJhZDQ5LWRkYjUtNDFkZi05YWM4LTk5YWJlNDgxZWI1Ny5qcGc=",
        "year": "2023",
        "starring": [
            "Pamela Anderson"
        ],
        "directedBy": [
            "Ryan White"
        ]
    },
    {
        "id": 27,
        "title": "All Quiet on the Western Front",
        "url": "https://www.rottentomatoes.com/m/all_quiet_on_the_western_front_2022",
        "img": "https://resizing.flixster.com/6sqa_k4rmkQ5YsXgP7uILv46jPg=/fit-in/180x240/v2/https://resizing.flixster.com/Tv-nj_XzcvU5GZthFm-0xrSvvjo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzljM2U3Mjk3LWExNzgtNGE2NS05OTMxLWVlZmU1NzNlZWM5MS5qcGc=",
        "year": "2022",
        "starring": [
            "Felix Kammerer",
            "Albrecht Schuch",
            "Aaron Hilmer",
            "Moritz Klaus"
        ],
        "directedBy": [
            "Edward Berger"
        ]
    },
    {
        "id": 28,
        "title": "Triangle of Sadness",
        "url": "https://www.rottentomatoes.com/m/triangle_of_sadness",
        "img": "https://resizing.flixster.com/VXfzKX974mfVjy9PhG-LbP_5cPs=/fit-in/180x240/v2/https://resizing.flixster.com/z6ABTqY9Z_hs2mKAokadKfuTHyg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI5NTZjNDYwLWFkNDgtNDhlZC05OWE5LWZlYzRhMjgwZDJjMC5qcGc=",
        "year": "2022",
        "starring": [
            "Harris Dickinson",
            "Charlbi Dean",
            "Woody Harrelson",
            "Dolly De Leon"
        ],
        "directedBy": [
            "Ruben Östlund"
        ]
    },
    {
        "id": 29,
        "title": "Shotgun Wedding",
        "url": "https://www.rottentomatoes.com/m/shotgun_wedding_2022",
        "img": "https://resizing.flixster.com/rJcqztO8ZVS4ofnZXpjNoimWF-s=/fit-in/180x240/v2/https://resizing.flixster.com/ZNvNNPunUvrh94KGHshXm5sNiWU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U1NDgxNjljLWQ2OTctNDMzZi05NzI3LWJkMmVhYTZlMThmZC5qcGc=",
        "year": "2023",
        "starring": [
            "Jennifer Lopez",
            "Josh Duhamel",
            "Jennifer Coolidge",
            "Sonia Braga"
        ],
        "directedBy": [
            "Jason Moore"
        ]
    },
    {
        "id": 30,
        "title": "Aftersun",
        "url": "https://www.rottentomatoes.com/m/aftersun",
        "img": "https://resizing.flixster.com/h8LwbuiZgNZQhZ65PwjHajIUSPA=/fit-in/180x240/v2/https://resizing.flixster.com/dLAtEC7GySsgPdWZKx-cPCV6KBY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q3NWQwM2U2LWJkNTctNDNjOC04ODhiLTNlYjI1MGI0YmI4ZS5qcGc=",
        "year": "2022",
        "starring": [
            "Paul Mescal",
            "Frankie Corio",
            "Celia Rowlson-Hall",
            "Kayleigh Coleman"
        ],
        "directedBy": [
            "Charlotte Wells"
        ]
    }
]

export default movieData