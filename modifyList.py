classes = ["CPSC 231", "CPSC 233", "CPSC 217"]
taken = ["CPSC 231", "CPSC 413"]

for classTaken in taken:
    try:
        classes.remove(classTaken)
    except:
        pass
    
print(classes)