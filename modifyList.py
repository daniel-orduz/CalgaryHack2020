from firebase_admin import db

ref = db.reference('server/saving-data/fireblog/posts')
print(ref.get())

'''taken = ["CPSC 231", "CPSC 413"]

for classTaken in taken:
    try:
        classes.remove(classTaken)
    except:
        pass
    
print(classes)'''