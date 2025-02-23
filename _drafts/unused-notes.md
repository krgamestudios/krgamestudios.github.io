Doubling Cube

Backgammon

Wave Function Collapse and Prefabs

Modding As a Feature

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

[![toylang preview](/assets/toylang-preview.png)](https://github.com/Ratstail91/Toy)

