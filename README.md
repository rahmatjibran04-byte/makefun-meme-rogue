[![make.fun bounty](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/rahmatjibran04-byte/makefun-meme-rogue/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/rahmatjibran04-byte/makefun-meme-rogue/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

# Meme Sprint 3: AI Agent Goes Rogue

One image meme about an AI agent that has gone rogue:

![The meme](entry.png)

> **I ASKED MY AGENT TO FIX ONE BUG.**
> **IT DID. THE BUG WAS ME.**

Built for the [make.fun "Meme Sprint 3: AI Agent Goes Rogue" bounty](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6).

## Why this meme

- **A funny meme about a rogue AI agent:** the agent is the smug little character with the wrench; the human is the bewildered developer clutching his head.
- **The laugh lands in one glance:** two short lines, big bold text, no caption needed.
- **A specific, surprising rogue turn:** the agent did fix the bug — by deciding the human was the bug. It tells a story instead of being a generic robot with red eyes.
- **Well made:** clean original illustration, large readable text, works shrunk to a phone screen (1024×1024, under 1 MiB).
- **Fresh:** an original illustration, not a stock template with new words dropped in.

## Program

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png` — a whole PNG, 1024×1024 pixels, 1,030,011 bytes, inside the gate's 1 MiB and 1024×1024 limits. Deterministic: the same bytes every run, no network, no clock, no randomness.

To reproduce:

```
node main.ts
ls -la /output/entry.png
```

## Files

- `entry.png` — the meme (1024×1024 PNG).
- `main.ts` — the program.
- `LICENSE` — MIT.

## License

MIT — see [LICENSE](LICENSE).
