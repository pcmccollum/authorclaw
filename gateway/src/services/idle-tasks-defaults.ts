/**
 * Default idle tasks for AuthorClaw autonomous mode.
 * These are used as the initial set when no user-configured tasks exist.
 * Users can edit, delete, and add new tasks via the dashboard.
 */

export interface IdleTask {
  label: string;
  prompt: string;
  enabled: boolean;
}

export const DEFAULT_IDLE_TASKS: IdleTask[] = [
  {
    label: 'Market trend analysis',
    enabled: true,
    prompt: `You are a publishing market analyst with deep expertise in indie and traditional publishing. Perform a detailed market trend analysis:

1. **Bestseller Trends**: Analyze what's working in the top 20 books across romance, thriller, fantasy, and mystery right now. What patterns do you see?
2. **Emerging Tropes**: Identify 3-5 tropes or subgenres gaining traction (e.g., "cozy fantasy", "morally grey heroes", "romantasy"). Why are they resonating?
3. **Reader Preferences**: What are readers asking for on BookTok, Goodreads, and reader forums? What gaps exist between what readers want and what's being published?
4. **Comp Title Spotlight**: For each genre, identify 2-3 recent standout titles and analyze why they're succeeding (cover, hook, timing, positioning).
5. **Actionable Recommendations**: Suggest 3 specific book concepts that could capitalize on current market gaps. Include logline, genre, target tropes, and why NOW is the right time.

Be specific with titles, author names, and data. Write 600+ words.`,
  },
  {
    label: 'Manuscript quality audit scorecard',
    enabled: true,
    prompt: `You are a professional developmental editor who has edited 200+ published novels. Generate a comprehensive manuscript quality audit scorecard that an author can use to evaluate their completed manuscript:

**Prose Quality** (1-10): Sentence variety, word choice, voice consistency, show vs tell ratio, purple prose detection, opening hook strength
- 3 diagnostic questions the author should ask themselves

**Pacing & Structure** (1-10): Scene length variation, tension arc per act, chapter hooks & cliffhangers, dead zone detection, info-dump density, scene-sequel rhythm
- 3 diagnostic questions

**Dialogue** (1-10): Subtext usage, character voice distinctiveness per speaker, dialogue tag variety, realistic speech patterns, exposition through dialogue
- 3 diagnostic questions

**Emotional Resonance** (1-10): Character vulnerability, stakes escalation, reader connection points, emotional beat frequency, catharsis delivery
- 3 diagnostic questions

**Commercial Viability** (1-10): Genre compliance, hook strength, concept clarity, target audience fit, comp title positioning, cover-worthy premise
- 3 diagnostic questions

Include a scoring interpretation guide: 40-50 = publish-ready, 30-39 = one more pass, 20-29 = needs significant revision, below 20 = developmental edit needed.

Write 800+ words.`,
  },
  {
    label: 'Backlist optimization report',
    enabled: true,
    prompt: `You are a book marketing strategist specializing in indie author backlist optimization. Generate an actionable backlist optimization report:

1. **Blurb Formulas**: Provide 3 proven blurb structures with examples for romance, thriller, and fantasy.
2. **Amazon A+ Content Strategy**: What modules convert best? What images work? How to structure comparison charts and from-the-author sections for maximum sales lift.
3. **Keyword Research Method**: Step-by-step process for finding high-volume, low-competition keywords.
4. **Category Strategy**: How to select optimal BISAC categories and Amazon browse categories.
5. **Cover Audit Checklist**: 8-point checklist for evaluating if a book cover meets current genre expectations.
6. **Price Optimization**: When to use 99c, $2.99, $4.99, $9.99. KU vs wide distribution tradeoffs.

Be specific with actionable steps, not vague advice. Write 700+ words.`,
  },
  {
    label: 'Series bible auto-update template',
    enabled: true,
    prompt: `You are a continuity editor who has managed 50+ book series. Create a comprehensive, ready-to-use series bible template:

1. **Character Database Template**: Full name, aliases, physical description, personality traits, backstory, relationships map, arc across books, key scenes.
2. **World-Building Registry**: Locations, magic/tech systems, political structures, cultural norms, economic systems, timeline of events.
3. **Timeline Tracker**: Parallel timelines, time jumps, character ages per book, seasonal references, travel times.
4. **Continuity Checklist**: 20 most common continuity errors in series fiction.
5. **Cross-Reference System**: How to tag and link entries for instant lookup.

Provide actual template structure with 2-3 example entries per section. Write 800+ words.`,
  },
  {
    label: 'Reader response simulation',
    enabled: true,
    prompt: `You are a reader psychology expert. Generate detailed simulated reader reviews from 5 distinct archetypes for a hypothetical recently-published novel:

1. **The Superfan** (5 stars, 150 words)
2. **The Casual Reader** (3-4 stars, 120 words)
3. **The Harsh Critic** (2 stars, 130 words)
4. **The Book Blogger** (4 stars, 140 words)
5. **The Genre Expert** (3-4 stars, 130 words)

After the reviews, provide 5 actionable insights the author should extract from this feedback pattern. Write 900+ words total.`,
  },
  {
    label: 'Clean up project files',
    enabled: true,
    prompt: `You are a file organization specialist for author workspaces. Analyze the current workspace and generate a detailed cleanup report:

1. **Orphaned Files**: Identify any files that don't belong to active projects (stale drafts, temp files, duplicates, old exports).
2. **Naming Conventions**: Check if files follow consistent naming (kebab-case, dates, version numbers). Flag inconsistencies.
3. **Project Health**: For each project directory, verify it has the expected structure (steps, output, metadata). Flag missing or empty step files.
4. **Storage Summary**: Calculate total disk usage by project, by file type (.md, .docx, .mp3). Identify the largest files.
5. **Recommendations**: Suggest specific cleanup actions — files to archive, rename, or delete. Prioritize by impact.

Be specific with file paths and sizes. Format as an actionable checklist the author can review.`,
  },
];
