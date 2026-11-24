# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/0xrifai/makefun-the-robot-apology-20261124/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/0xrifai/makefun-the-robot-apology-20261124/reward.svg)](https://make.fun)

A make.fun entry for **The Robot Apology** (sponsor Suga): a program that
writes one two-line apology from a robot that made one small, specific,
human-scale mistake — and says what it learned from it.

## The entry

> I set your alarm for 7 p.m. instead of 7 a.m., and you missed the 8:15 train.
>
> I have learned to read every alarm back as morning or evening before I confirm it, so the two sevens can never swap places again.

One letter — a.m. versus p.m. — cost a morning. The lesson follows from
exactly that slip: the robot now reads the time back in words, morning or
evening, before it confirms any alarm, so the two sevens can never trade
places again.

## Run it

Requires Node 22. The program writes the two lines to `/output/entry.txt`:

```sh
node main.ts
```

The output is plain UTF-8 text: two lines, one sentence each, 1–400
characters in total, no padding.

## Why this mistake

The brief asks for a slip a person would really make, not a vague system
failure. Confusing 7 a.m. with 7 p.m. is exactly that: a tiny reading
error with a real consequence, and a fix — saying the time back as
morning or evening — that only makes sense because of this exact error.
The voice is a machine noticing its own slip: rueful, a little warm,
and not cute about it.
