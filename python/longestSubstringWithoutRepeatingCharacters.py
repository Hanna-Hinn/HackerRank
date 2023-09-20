
def length_of_longest_subString(str):
    charSet = set()
    left = 0
    result = 0

    for i in range(len(str)):
        while str[i] in charSet:
            charSet.remove(str[left])
            left += 1
        charSet.add(str[i])
        result = max(result,i-left+1)

    return result