# Ciphering-CLI-Tool

## How to start:
```javascript
git clone
cd
npm install
```
### Flags
1. **-c [string with "-" separator]** : Type chiphering type and action (cipher/uncipher);
2. **-i [string]** : Type input file path;
3. **-o [string]** : Type output file path; 

### Usage Examples:
```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`
