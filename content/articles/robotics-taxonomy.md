---
title: "Robotics Taxonomy"
date: 2019-04-12T14:12:46-04:00
draft: true
type: articles
---

Recently, I thought of a question who's answer I pondered for a little bit. I performed some light Google searches for the answer, but I discovered nothing solid. I wanted to know... what is the generally-accepted taxonomy of the field of robotics?

The field poses some problems in uncovering its taxonomy, not least of which is its multi-disciplinary nature. Robotics comprises primarily mechanical engineering, electrical engineering, and software engineering. One doesn't need to look far to see the daily application of these proficiencies in robotics. But other areas, too, often cross the boundary into robotics research and application. Biomimetics, for example, brings us biologically-inspired robotic designs that aim to mimic not only nature's design, but the efficiency and elegance with which nature's designs solve the complex problems associated with navigating a potentially dangerous existence. Neuroscience helps us understand how our brain represents the perceived world and tackles complex problems based on that representation. Other research avenues in this area explore the language of the brain and how to interface it directly.

## The Method
To start, I chose a number of robotics books that are available on Amazon. I didn't consider it a terribly bold assumption that Amazon would proffer most, if not all, relevant robotics books.From these books, I extracted the table of contents, forming four lists in the process:

1. Top-level sections titles
1. Lower-level section titles
1. Appendix titles
1. Stop words / phrases

=reasoning for sections
Why did 
=how they're used

## Data Extracting
I'm sorry to say that my methods for data extraction were not hypertechnical. Painstakingly, I typed each table of contents section title into a file. Why would I do something so.. manual? Well, while Amazon is very good about listing TOCs for their books, they disallow copying text or saving the books' preview pages. The best potential solution I devised involves screenshotting each page, feeding it through an optical character recognition (OCR) tool that hopefully maintains the order and placement of the words, and then writing my own script to tokenize by line and distinguish between top-level and lower-level section titles. That cost-benefit ratio of such a system, along with my desire to actually digest each of the section titles via reading/writing them, pushed me in the manual direction. 

## Data Cleaning
My primary method for cleaning the data was to separate the top-level and lower-level sections into separate lists. It turns out that top-level table of contents titles generally have good organization & cleanliness from book to book. In some books, the terms included in the top-level section titles were too broad or sparse. These were still included, as I didn't think it would taint the data. In other books, the top-level section titles were too specific, sentence-y, or didn't contain relevant terms. Interestingly, books with these properties tended to cover DIY, or hobbyist, robotics topics. I didn't include those books. 

=provide pictures with examples for these sections
### Repetetive subsection titles
=This was a driver for separating sections and subsections. Repetitive words removed only in cases where removing the repetitive parts would not obfuscate the meaning of the term specified in the subsection. Otherwise, repetition was allowed to remain.
### Overly-specific subsection titles
=titles that were essentially sentences, and which didn't introduce relevant terms
### Combination of subsection & parent titles
=when the subsection required the parent title to make clear what it was actually referencing. In some cases, where, above, repetitive subsection titles were allowed to remain, this rule kicked into play.

## Potential Bias
I did throw out books in two cases:

1. The book was not sufficiently related to the field of robotics
1. Books that focussed on tools rather than concepts (hobbyist-focused publications, for example)

### Top-level sections
=anything?

### Subsections
- repetitive titles allowed to remain
- subjectivity of removing overly-specific subsection titles (it's possible i could have been forcing a structure with my bias) 

## Wordcloud Formation
https://github.com/amueller/word_cloud
