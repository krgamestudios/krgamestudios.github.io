Backgammon's Doubling Cube

Wave Function Collapse and Prefabs

Modding As a Feature - Luanti

AI: Alien Intelligence - AI is a different "species" than humans

---

tools for checking tags

```bash
grep -rwh . -e "^tags:*" --include=*.md
```

```bash
#this counts and lists each tag

grep -rwh . -e "^tags:*" --include=*.md | sed -e 's/tags:/ /g' | sed -e 's/[^[:alpha:]-]/ /g' | tr '\n' " " |  tr -s " " | tr " " '\n' | grep "\S" | tr 'A-Z' 'a-z' | sort | uniq -c | sort -nr
```
Linked image to the repo:

[![toylang preview](/assets/toylang-preview.png)](https://github.com/krgamestudios/Toy)



*When I'm not [], I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios).*
