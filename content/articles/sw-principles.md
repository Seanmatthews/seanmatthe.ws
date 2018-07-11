---
title: "Seven Software Maxims"
date: 2018-07-01T16:06:51-04:00
draft: false
type: articles
---
<div class="bash" >
{{< highlight bash >}}
  
  You enter a shadowy stone archway. The exquisite craftsmanship of the ancient masons
  who built this temple peeks through the centuries of corrosion. Your iPhone LED lights
  your way toward an empty cyclindrical chamber. On the walls, you make out a series of
  seven faint, pseudorandomly placed markings.
  Obvious exits: a large stone archway.
  
{{< / highlight >}}
</div>


<div class="bash" >
{{< highlight bash >}}
  
 > read first marking
  You wipe away the layers of crud from the first set up markings.
  A written phrase appears: 'Single Responsibility Principle'
  
{{< / highlight >}}
</div>


The knowledge of the __Single Responsibility Principle__ has been conferred to you by The Oracle. This principle suggests that _"every module or class should have a reponsibility over [only] a single part of the functionality provided by the software, and that reponsibility should be entirely encapsulated by the class. All services should be narrowly aligned with that responsibility."<sup>[[1]](#references)</sup>_ Otherwise stated, _"a class should have only one reason to change."<sup>[[2]](#references)</sup>_ That is, if you're changing a class for more than one purpose, say both data and cosmetic, then that class should be split into two separate classes. 


<div class="bash" >
{{< highlight bash >}}
  
 > read second marking
  Upon removing the cruft from the grooves that make up this set of markings,
  a written phrase appears: 'Separation of Concerns'
  
{{< / highlight >}}
</div>


The knowledge of the __Separation of Concerns__ has been conferred to you by The Oracle. This principle suggests _"[separating] a computer program into distinct sections, such that each section addresses a separate concern. A concern can be as general as the details of the hardware [for which the code is being optimized], or as specific as the name of a class to instantiate."<sup>[[3]](#references)</sup>_ It differs from the Single Responsibility Principle in that a "conerns" are synonymous with features or behaviors, while responsibilities refer to those of a software architectural unit (a class, for example).


<div class="bash" >
{{< highlight bash >}}
  
 > read third marking
  Besides some graffiti, "Η Δήμητρα ήταν εδώ", a clear written phrase is written:
  'Principle of Least Knowledge'
  
{{< / highlight >}}
</div>

The knowledge of the __Principle of Least Knowledge__ has been conferred to you by The Oracle. The principle suggests that each unit should only have limited knowledge about other closely-related units, and each unit should only talk to its immediate friends. In other words, ensure a _loose coupling_ among your system's components.

<div class="bash" >
{{< highlight bash >}}
  
 > read fourth marking
  Gross! It's covered in slimy water trickling from above! As you fight lunch back down,
  you notice a written phrase: 'Don't Repeat Yourself'
  
{{< / highlight >}}
</div>

The knowledge of __Don't Repeat Yourself__ has been conferred to you by The Oracle. The principle suggests that _"every piece of knowledge must have a single, unambiguous, authoritative representation within a system."[[6]](#references) More than code, it applies to database schemas, test plans, build systems, and documentation. When applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements.


<div class="bash" >
{{< highlight bash >}}
  
 > read fifth marking
  You peel away a half-baked layer of clay inscribed with "FIXME". Perhaps a warning
  or a curse? A written phrase appears: 'You Ain't Gonna Need It'
  
{{< / highlight >}}
</div>


The knowledge that __You Ain't Gonna Need It__ has been conferred to you by The Oracle. This principle suggests that you shouldn't add functionality until you need it. Simple!


<div class="bash" >
{{< highlight bash >}}
  
 > read sixth marking
  You push aside an indecipherable text, labeled with the initials "PHP', that hangs 
  in front of the set of markings. A written phrase appears: 'Keep It Stupid Simple'
  
{{< / highlight >}}
</div>


The knowledge of __Keep It Stupid Simple__ has been conferred to you by The Oracle. Or, Keep It Simple Stupid. This principle suggests that _"simplicity should be a key goal in design, and that unnecessary complexity should be avoided."<sup>[[8]](#references)</sup>_ If the majority of the room can't understand your design, it's too complicated.


<div class="bash" >
{{< highlight bash >}}
  
 > read seventh marking
  A heart has been traced in the dust surrounding a written phrase: 'Reasonable Person Principle'
  
{{< / highlight >}}
</div>


The knowledge of the __Reasonable Person Principle__ has been conferred to you by The Oracle. This principle differs from the rest in that it doesn't apply to software, but to the envronment in which we create software. It suggests that 1) everyone will be reasonable, 2) everyone expects everyone else to be reasonable, 3) no one is special, and 4) do not be offended if someone suggests that you're not being reasonable. Reasonable people think about their needs, and the needs of others, and adjust their behavior to meet the goals of a common good for the community.


<div class="bash" >
{{< highlight bash >}}
  
  Your light is extinguished as your iPhone battery dies. You irrationally feel your way 
  around the circumference of the room. You hope that the tingling on the back of your 
  hand is carpal tunnel, rather than the hundred images of creepy crawlers that flash 
  through your mind in that instant. Suddenly your hand slips off the edge at what must 
  be the singular entrance. You trip into the hallway and continue walking straight 
  until a dim light appears ahead. You increase your pace to a trot, determined to soon 
  check your email next to a steaming cup of Costa Rican El Balar. As you plunge into 
  brightness, the aura of heavy air escapes you and you breathe more easily.


  "***Congratulations! You have leveled up!***"
  
{{< / highlight >}}
</div>


<div class="bash" >
{{< highlight bash >}}
  
 > go path
  You embark on your long journey back to the Uberland. Along the way, and with every 
  new group you meet, you practice your newfound principles. Though the path proves more 
  difficult than you imagined, and your memories of The Oracle slowly fade, you retain a 
  sense of its guiding truths for software development. As your life eventually grays 
  into the twilight of a waning sunset, the feeling of satisfaction will bubbles up within... 
  satisfaction that that which you've pursued, you pursued well and with earnest passion. 
  
{{< / highlight >}}
</div>


___You're journey is not yet finished! These maxims, which you have discovered, comprise only a countable subset of the innumerable pieces of sage wisdom to be found. Seek them!___
<br><br><br>

### References
1. https://en.wikipedia.org/wiki/Single_responsibility_principle
1. *"[Principles of Object Oriented Design](http://www.butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)"*
1. https://en.wikipedia.org/wiki/Separation_of_concerns
1. https://www.cs.utexas.edu/users/EWD/transcriptions/EWD04xx/EWD447.html
1. https://en.wikipedia.org/wiki/Law_of_Demeter
1. *"[The Pragmatic Programmer](https://en.wikipedia.org/wiki/The_Pragmatic_Programmer)"*
1. https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it
1. https://en.wikipedia.org/wiki/KISS_principle
1. https://www.cs.cmu.edu/~weigand/staff/