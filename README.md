# Shorten Long Numbers
Shorten long numbers to Q/B/M/K

## Examples
**2 decimal places max, force decimal places even when the number is round**
```JS
shortenNumber(1000000, 2, true);// 1.00M
shortenNumber(1400000, 2, true);// 1.40M
```
**2 decimal places max, don't force decimal places when the number is round**
```JS
shortenNumber(1000000, 2, false);// 1M
shortenNumber(1400000, 2, false);// 1.4M
```
