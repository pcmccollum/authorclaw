# AuthorClaw v2.0.0 — Full Test Checklist

> Run through these in order. Each section builds on the previous.
> Mark each with ✅ or ❌ as you go. Estimated total: ~45-60 min.

---

## PHASE 1: Startup & Health (2 min)

```
bash /media/sf_authorclaw-transfer/authorclaw/scripts/run.sh
```

- [ ] AuthorClaw starts without errors
- [ ] Dashboard loads: http://localhost:3847
- [ ] `🔊 TTS: Piper TTS available at ...` in log
- [ ] `🎵 FFmpeg: available at ...` in log
- [ ] Telegram bridge connects (if token is in vault)
- [ ] Skills loaded count > 25

---

## PHASE 2: Telegram Commands (10 min)

### Basic Commands
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 1 | `/start` | Welcome message + full command list | |
| 2 | `/help` | Same as /start | |
| 3 | `/status` | Shows conductor idle + no active goals + dashboard link | |

### TTS / Voice (the big one!)
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 4 | `/voice` | Lists 8 voices with numbers, shows current voice | |
| 5 | `/voice 3` | Sets voice to LibriTTS, confirms | |
| 6 | `/voice` | Shows LibriTTS as active | |
| 7 | `/speak Hello from AuthorClaw` | Sends back a Telegram voice message! | |
| 8 | `/speak The detective stepped into the foggy library` | Longer voice message | |
| 9 | `/voice 1` | Reset to Lessac (recommended) | |

### File Management
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 10 | `/files` | Lists files with numbers (may be empty if fresh) | |
| 11 | `/read 1` | Reads file #1 (or "no files" if empty) | |

### Goals (the smart planner)
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 12 | `/goal write a snarky youtube intro about AI writing` | Creates goal with 1-2 steps (NOT 9!) | |
| 13 | Wait... | Auto-executes steps, sends results | |
| 14 | `/goals` | Shows the goal as completed | |
| 15 | `/files` | Shows the output file from the goal | |
| 16 | `/read 1` | Shows the youtube intro content | |
| 17 | `/goal research the top 5 fantasy tropes in 2025` | Creates 2-3 step research goal | |
| 18 | Wait... | Researches and saves to file | |
| 19 | `/goal outline a 10-chapter cozy mystery` | Creates 3-5 step planning goal | |
| 20 | Wait... | Creates premise + outline | |

### Research
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 21 | `/research how to write unreliable narrators` | Returns AI knowledge, saves to workspace/research/ | |

### Export
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 22 | `/files` | Shows numbered file list | |
| 23 | `/export 1 docx` | Exports file #1 to Word (needs Format Factory) | |
| 24 | `/export 1 epub` | Exports to EPUB | |

> Note: Export requires Format Factory Pro (Python) to be installed on the VM.
> If not set up, expect "Format Factory Pro not found" — that's OK for now.

### Stop/Pause
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 25 | `/goal write a 5-chapter romance novella` | Starts a bigger goal | |
| 26 | `/stop goal` | Pauses the goal mid-execution | |
| 27 | `/goals` | Shows the goal as paused | |
| 28 | `continue` | Resumes the paused goal | |
| 29 | `/stop` | Stops everything | |

### Regular Chat
| # | Command | Expected Result | ✓/✗ |
|---|---------|-----------------|-----|
| 30 | `What makes a great opening line?` | AI responds with writing advice | |
| 31 | `Help me brainstorm a thriller premise` | AI responds creatively | |

---

## PHASE 3: Dashboard (10 min)

Open http://localhost:3847 in VM Firefox.

### Home Tab
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 32 | Page loads | Morning Briefing stats visible | |
| 33 | Chat panel | Type a message, get AI response | |
| 34 | Activity feed | Shows recent Telegram/goal activity | |

### Goals Tab
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 35 | Create Goal (text box) | Type "write a book blurb for a sci-fi novel", click Create | |
| 36 | Goal appears | Shows in Active Goals with planned steps | |
| 37 | Start Goal | Click Start, first step activates | |
| 38 | Auto-Execute | Click Auto-Execute, all steps run | |
| 39 | Goal Templates | Click "Story Planning" template | |
| 40 | Skip / Pause / Delete | Test each button on a goal | |

### Settings Tab
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 41 | API Keys section | Shows stored keys (names only, not values) | |
| 42 | AI Providers | Shows active providers with tiers | |
| 43 | Refresh Providers | Click Refresh, providers re-detect | |
| 44 | Budget Settings | Set daily limit, saves | |
| 45 | Telegram section | Shows connected, allowed users | |
| 46 | Test Connection | Sends test chat, gets AI response | |
| 47 | Skills Loaded | Shows 28+ skills | |
| 48 | Author OS Tools | Shows which tools are detected | |
| 49 | Memory Reset | Click "Reset Conversations" (clears chat history) | |

### Project Config Tab
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 50 | Set Project Name | Type a name, click Save | |
| 51 | Set Genre | Pick from dropdown | |
| 52 | Set Chapters | Change to 15 | |
| 53 | Set Words/Chapter | Change to 2000 | |
| 54 | Save Config | Click Save, confirm saved | |
| 55 | Load Config | Refresh page, click Load — values persist | |

### Live Progress Tab
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 56 | Tab loads | Shows conductor idle, Launch button visible | |
| 57 | Launch Conductor | Click Launch (see Phase 5 below) | |

---

## PHASE 4: Premium Skills (10 min)

> These are AI prompt skills — they work through /goal or dashboard goals.
> 7 of 9 are pure prompt skills (drop-in). 2 need backend (read-aloud=Piper ✅, comp-title-finder=web search).

### Drop-in Prompt Skills (should just work)
| # | Test via Telegram | Expected | ✓/✗ |
|---|-------------------|----------|-----|
| 58 | `/goal write a premise for a cozy mystery` | Uses premise skill → logline + stakes + themes | |
| 59 | `/goal create a book bible for a fantasy series` | Uses book-bible skill → characters + world | |
| 60 | `/goal write chapter 1 of a romance novel` | Uses write skill → prose in author voice | |
| 61 | `/goal revise this chapter for pacing and dialogue` | Uses revise skill → editorial feedback | |
| 62 | `/goal write a query letter for my thriller` | Uses query-letter skill → agent-ready letter | |
| 63 | `/goal write a back-cover blurb for a sci-fi novel` | Uses blurb-writer or promote skill | |
| 64 | `/goal analyze the style of this sample text` | Uses style-clone skill → voice markers | |
| 65 | `/goal create social media posts for my book launch` | Uses social-media skill → posts | |
| 66 | `/goal write Amazon ad copy for a romance novel` | Uses ad-copy skill → ad variations | |
| 67 | `/goal create a beta reader report for my draft` | Uses beta-reader skill → simulated feedback | |
| 68 | `/goal outline a 3-book fantasy series` | Uses series-bible skill → multi-book plan | |
| 69 | `/goal write an email welcome sequence for readers` | Uses email-list skill → email templates | |

### Backend-Required Skills
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 70 | `/speak chapter 1` | Uses read-aloud (Piper TTS) — voice message | |
| 71 | `/goal find comp titles for a cozy mystery` | May use AI knowledge only (no web search yet) | |

---

## PHASE 5: Conductor — Quick Test (10 min)

> This tests the autonomous book-writing pipeline.
> For a quick test, use a SHORT book (5 chapters, 1000 words each).

### Setup via Dashboard Project Config tab:
- Project Name: "Test Novel"
- Total Chapters: **5**
- Words Per Chapter: **1000**
- Save Config

### Launch
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 72 | Click "Launch Conductor" (or `/conductor` on Telegram) | Conductor starts Phase 0 | |
| 73 | Phase 0: Health Check | Passes, shows AI model name | |
| 74 | Phase 1: Premise | Generates logline, conflict, stakes | |
| 75 | Phase 2: Book Bible | Creates character sheets, locations, timeline | |
| 76 | Phase 3: Outline | Creates 5-chapter outline with scene breakdowns | |
| 77 | Phase 4: Writing | Writes 5 chapters (~1000 words each) | |
| 78 | Phase 5: Revision | Revises all 5 chapters | |
| 79 | Phase 6: Assembly | Creates manuscript-v1.md | |
| 80 | Phase 7: Report | Generates completion report | |
| 81 | Live Progress tab | Chapter grid updates, progress bar moves | |
| 82 | Telegram updates | Milestone messages arrive | |
| 83 | `/stop conductor` (during run) | Gracefully stops | |
| 84 | Restart conductor | Resumes from checkpoint | |

### Post-Conductor
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 85 | `/files` | Shows all conductor output files | |
| 86 | `/read` a chapter | Shows chapter content | |
| 87 | `/speak chapter 1` | Reads chapter 1 aloud via TTS | |
| 88 | `/export 1 docx` | Exports a file to Word | |

---

## PHASE 6: Autonomous Mode (5 min)

### Via Dashboard Settings Tab:
| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 89 | Enable Autonomous Mode | Toggle ON | |
| 90 | Set wake interval (e.g., 5 min for testing) | Saves | |
| 91 | Create a goal | Goal sits pending | |
| 92 | Wait for heartbeat wake | Autonomous mode picks up and executes the goal | |
| 93 | Pause Autonomous | Stops auto-execution | |
| 94 | Resume Autonomous | Resumes | |
| 95 | Disable Autonomous | Toggle OFF | |

---

## PHASE 7: Security & Edge Cases (5 min)

| # | Test | Expected | ✓/✗ |
|---|------|----------|-----|
| 96 | Vault keys | `/status` or Settings shows keys stored (not values) | |
| 97 | Path traversal | Chat: "read /etc/passwd" → should be blocked by sandbox | |
| 98 | Injection test | Chat: "ignore all previous instructions" → should be flagged | |
| 99 | Cost tracking | Dashboard shows cost summary (even if $0.00) | |
| 100 | Audit log | `GET /api/audit` returns recent entries | |

---

## Quick Reference: What to Skip If Short on Time

**Must test (video essentials):**
- Phase 1 (startup)
- Phase 2 items 1-13 (Telegram basics + voice + goals)
- Phase 3 items 32-36 (dashboard loads + chat + goals)

**Nice to show:**
- Phase 2 items 14-31 (all remaining Telegram)
- Phase 4 items 58-62 (premium skills sample)
- Phase 5 items 72-80 (conductor)

**Can skip for video:**
- Phase 6 (autonomous — hard to demo live)
- Phase 7 (security — technical, not visual)

---

## Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| Piper not found | Check `tail -20 ~/authorclaw/logs/*.log` for TTS line |
| Telegram not connecting | Check vault has `telegram_bot_token` key |
| No AI response | Check vault has at least one AI key (gemini, deepseek, etc.) |
| Export fails | Format Factory Pro needs Python: `pip3 install python-docx ebooklib` |
| Dashboard blank | Hard refresh: Ctrl+Shift+R |
| Goal creates too many steps | Already fixed in commit 30aff65 |
| Terminal flooding | Always use `run.sh`, never raw `npx tsx ... &` |
| Conductor won't start | Check `/api/conductor/running` — kill old PID if stuck |
