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
    }
]

export default movieData