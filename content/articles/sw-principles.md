---
title: "Seven Software Maxims"
date: 2018-07-01T16:06:51-04:00
draft: true
type: articles
---
```bash
You enter a shadowy stone archway. The exquisite craftsmanship of the ancient masons who built this temple peeks through the centuries of corrosion. Your iPhone LED lights your way toward an empty cyclindrical chamber. On the walls, you make out a series of seven faint, pseudorandomly placed markings. Obvious exits: a large stone archway.
```

```bash
> read first marking
You wipe away the layers of crud from the first set up markings. A written phrase appears: _Single Responsibility Principle_
```

The knowledge of the __Single Responsibility Principle__ has been conferred to you by The Oracle. This principle suggests that "every module or class should have a reponsibility over [only] a single part of the functionality provided by the software, and that reponsibility should be entirely encapsulated by the class. All services should be narrowly aligned with that responsibility."<sup>[https://en.wikipedia.org/wiki/Single_responsibility_principle]([1])</sup> Otherwise stated, "a class should have only one reason to change."<sup>[]([2])</sup> That is, if you're changing a class for more than one purpose, say both data and cosmetic, then that class should be split into two separate classes. 

```bash
> read second marking
Upon removing the cruft from the grooves that make up this set of markings, a written phrase appears: _Separation of Concerns_
```

The knowledge of the __Separation of Concerns__ has been conferred to you by The Oracle. This principle suggests separating "a computer program into distinct sections, such that each section addresses a separate concern. A concern can be as general as the details of the hardware [for which the code is being optimized], or as specific as the name of a class to instantiate."<sup>[https://www.cs.utexas.edu/users/EWD/transcriptions/EWD04xx/EWD447.html]([3])</sup> It differs from the Single Responsibility Principle in that a "conerns" are synonymous with features or behaviors, while responsibilities refer to those of a software architectural unit (a class, for example).

```bash
> read third marking
Besides some graffiti, "Η Δήμητρα ήταν εδώ", a clear written phrase is written: _Principle of Least Knowledge_
```

The knowledge of the __Principle of Least Knowledge__ has been conferred to you by The Oracle. The principle suggests that each unit should only have limited knowledge about other closely-related units, and each unit should only talk to its immediate friends. In other words, ensure a _loose coupling_ among your system's components.

```bash
> read fourth marking
Gross! It's covered in slimy water trickling from above! As you fight lunch back down, you notice a written phrase: _Don't Repeat Yourself_
```

The knowledge of __Don't Repeat Yourself__ has been conferred to you by The Oracle. The principle suggests that every piece of knowledge must have a single, unambiguous, authoritative representation within a system. More than code, it applies to database schemas, test plans, build systems, and documentation. When applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements.

```bash
> read fifth marking
You peel away a half-baked layer of clay inscribed with "FIXME". Perhaps a warning or a curse? A written phrase appears: _You Ain't Gonna Need It_
```

The knowledge that __You Ain't Gonna Need It__ has been conferred to you by The Oracle. This principle suggests that you shouldn't add functionality until you need it. Simple!

```bash
> read sixth marking
You push aside an indecipherable text, labeled with the initials "PHP', that hangs in front of the set of markings. A written phrase appears: _Keep It Stupid Simple_
```

The knowledge of __Keep It Stupid Simple__ has been conferred to you by The Oracle. Or, Keep It Simple Stupid. This principle suggests that simplicity should be a key goal in design, and that unnecessary complexity should be avoided. If the majority of the room can't understand your design, it's too complicated.

```bash
> read seventh marking
A heart has been traced in the dust surrounding a written phrase: _Reasonable Person Principle_
```

The knowledge of the __Reasonable Person Principle__ has been conferred to you by The Oracle. This principle differs from the rest in that it doesn't apply to software, but to the envronment in which we create software. It suggests that 1) everyone will be reasonable, 2) everyone expects everyone else to be reasonable, 3) no one is special, and 4) do not be offended if someone suggests that you're not being reasonable. Reasonable people think about their needs, and the needs of others, and adjust their behavior to meet the goals of a common good for the community.

```bash
Your light is extinguished as your iPhone battery dies. You irrationally feel your way around the circumference of the room. You hope that the tingling on the back of your hand is carpal tunnel, rather than the hundred images of creepy crawlers that flash through your mind in that instant. Suddenly your hand slips off the edge at what must be the singular entrance. You trip into the hallway and continue walking straight until a dim light appears ahead. You increase your pace to a trot, determined to soon check your email next to a steaming cup of Costa Rican El Balar. As you plunge into brightness, the aura of heavy air escapes you and you breathe more easily.

***Congratulations! You have leveled up!*** <yellow text>
```

```bash
> go path
You embark on your long journey back to the Uberland. Along the way, and with every new group you meet, you practice your newfound principles. Though the path proves more difficult than you imagined, and your memories of The Oracle slowly fade, you retain a sense of its guiding truths for software development. As your life eventually grays into the twilight of a waning sunset, the feeling of satisfaction will bubbles up within... satisfaction that that which you've pursued, you pursued well and with earnest passion. 
```

You're journey is not yet finished! These maxims, which you have discovered, comprise only a countable subset of the innumerable pieces of sage wisdom to be found. Seek them!
