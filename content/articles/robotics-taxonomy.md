---
title: "Robotics Taxonomy"
date: 2019-05-05T14:12:46-04:00
draft: false
type: articles
---

Recently, I thought of a question who's answer I pondered for a little bit. I performed some light Google searches for the answer, but I discovered nothing solid. I wanted to know... what is the generally-accepted taxonomy of the field of robotics?

The field poses some problems in uncovering its taxonomy, not least of which is its multi-disciplinary nature. Robotics comprises primarily mechanical engineering, electrical engineering, and software engineering. One doesn't need to look far to see the daily application of these proficiencies in robotics. But other areas, too, often cross the boundary into robotics research and application. Biomimetics, for example, brings us biologically-inspired robotic designs that aim to mimic not only nature's design, but the efficiency and elegance with which nature's designs solve the complex problems associated with navigating a potentially dangerous existence. Neuroscience helps us understand how our brain represents the perceived world and tackles complex problems based on that representation. Other research avenues in this area explore the language of the brain and how to interface it directly.

{{< figure src="../img/bendercloud.png" height="929" width="651" link="../img/bendercloud.png" target="_blank" >}}

## Methodology
To start, I chose a number of robotics books that are available on Amazon. I didn't consider it a terribly bold assumption that Amazon would proffer most, if not all, relevant robotics books.From these books, I extracted the table of contents, forming four lists in the process:

1. Top-level sections titles
1. Lower-level section titles
1. Appendix titles
1. Stop words / phrases

The top-level sections of textbooks tend to provide the most concisely relevant terms (if not too broad), which are likely to compose at least part of the taxonomy of the field. Lower-level subsection titles provide valuable detailed field terminology that might comprise the lower levels of the taxonomy tree. However, the subsections in many of the analyzed books would require thorough cleaning-- often  riddled with excessive and repetitive detail, or irrelevant words. The appendices offered a pleasant smattering of closely-related robotics terms. The stop set contains the typical prepositions, and common TOC words (references, examples, proof et al).

## Data Extraction
I'm sorry to say that my methods for data extraction were not hypertechnical. Painstakingly, I typed each table of contents section title into a file. Why would I do something so.. manual? Well, while Amazon is very good about listing TOCs for their books, they disallow copying text or saving the books' preview pages. The best potential solution I devised involves screenshotting each page, feeding it through an optical character recognition (OCR) tool that hopefully maintains the order and placement of the words, and then writing my own script to tokenize by line and distinguish between top-level and lower-level section titles. That cost-benefit ratio of such a system, along with my desire to actually digest each of the section titles via reading/writing them, pushed me in the manual direction. 

## Data Cleaning
My primary method for cleaning the data was to separate the top-level and lower-level sections into separate lists. It turns out that top-level table of contents titles generally have good organization & cleanliness from book to book. In some books, the terms included in the top-level section titles were too broad or sparse. These were still included, as I didn't think it would taint the data. In other books, the top-level section titles were too specific, sentence-y, or didn't contain relevant terms. Interestingly, books with these properties tended to cover DIY, or hobbyist, robotics topics. I didn't include those books. 

Other special cases where data required cleansing:
* Repetetive subsection titles were a driver for separating sections and subsections. I removed repetitive words only in cases where removing the repetitive parts would not obfuscate the meaning of the term specified in the subsection. Otherwise, I allowed repetition to remain.
* Overly-specific subsection titles, usually in the form of sentences, typically did not introduce any relevant terms. I wholly removed these.
* The combination of subsection & parent titles was required in instances where the parent title was required to differentiate, or properly describe, its subsection titles.
=when the subsection required the parent title to make clear what it was actually referencing. In some cases, where, above, repetitive subsection titles were allowed to remain, this rule kicked into play.

## The Beginnings Of A Consensus-Based Taxonomy
I've only begun to chip away at the data that contains this beautiful, cohesive robotics taxonomy information I was hoping to obtain. Clearly, I need to better structure the data for analysis in order to achieve a taxonomy that might be used as a high-level robotics taxonomoy. I look forward to revisiting this later. For now, here are some pretty and lightly informative graphs:

### Top 25 High-Level ToC Words
{{<figure src="../img/topwords_25_transparent.png" height="600" >}}

This graph uses only the top-level ToC section titles. I have to say it's not extremely surprising-- all the terms point to basic robotic systems comprised of sensing, planning, and control. If I didn't use it nearly everyday, I might be surprised at the frequency with which [ROS](https://www.ros.org/) shows up as its own section in many robotics books.

## Potential Bias & Other Errors
I did throw out entire books in two cases:

1. The book was not sufficiently related to the field of robotics
1. Books that focussed on tools rather than concepts (hobbyist-focused publications, for example)

The first case, I believe, had no negative effect. It's possible that through discarding books in the second case forced a biased structure on the resultant data, bounded by my subjectivity of what I deem to be tools versus concepts. 

In lower-level subsections, some titles with repetitive terms were retained due to their requirement in describing similar, but different, concepts. This undoubtedly affects individual word count, bolstering those repeated words. These same similar terms might then occur in more than one book, exacerbating the bias. 

Finally, you may have noticed that the ToC titles were split into individual words in most cases. Some of the top N words might be parts of multi-word terms. And they may have been pushed to the top N words especially if they were individually part of several multi-word terms. 
