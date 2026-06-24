from sqlalchemy import create_engine
import pyodbc
import sqlalchemy
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import ForeignKey, MetaData, Table, Column, Integer, String, func
from sqlalchemy.orm import Session, sessionmaker

# Подключение к БД
engine = sqlalchemy.create_engine(
    "mssql+pyodbc://@localhost/library?"
    "driver=ODBC+Driver+17+for+SQL+Server&"
    "trusted_connection=yes",
    echo=True
)
print("подключение:", engine)

Base = declarative_base()

# Таблицы
class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    bith_year = Column(Integer)  # Исправьте опечатку в названии поля
    # доступ к книгам
    books = relationship('Book', back_populates='author')

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String(200))
    year = Column(Integer)  # Добавьте поле year, если оно нужно
    author_id = Column(Integer, ForeignKey('authors.id'))
    # доступ к автору
    author = relationship('Author', back_populates='books')

# Удаление и создание таблиц
Base.metadata.drop_all(engine)  
Base.metadata.create_all(engine)

# Сессии
Session = sessionmaker(bind=engine)  
session = Session()
  
# Создание объектов (исправлены имена полей)
author1 = Author(name="Фёдор Достоевский", bith_year=1978)  
author2 = Author(name="Льюис Стивенсон", bith_year=1946)    
author3 = Author(name="Олдос Хаскли", bith_year=1920)       

book1 = Book(title="Униженные и оскорбленные", year=1967, author=author1)
book2 = Book(title="Идиот", year=1940, author=author1)
book3 = Book(title="Алмаз Раджи", year=1942, author=author2)
book4 = Book(title="Клуб Самоубийц", year=1980, author=author2)
book5 = Book(title="О новый дивный мир", year=1987, author=author3)

#сохранить в сессию
session.add_all([author1, author2, author3, book1, book2, book3, book4, book5])
#сохранить в бд
session.commit()



authors = session.query(Author).all()
for a in authors:
    print(a.name)



author = session.query(Author).get(1)
print("Автор:", author.name)
author.name = "Достоевский"
print("Автор:", author.name)



books_all = session.query(Book).all()
for b in books_all:
    print(b.id, b.title)

bookk = session.query(Book).get(2)
session.delete(bookk)

books_all = session.query(Book).all()
for b in books_all:
    print(b.id, b.title)



sorted = session.query(Book).order_by(Book.year.desc()).all()
for sos in sorted:
    print(sos.title, sos.year)



books = session.query(Book).all()
for book in books:
    if book.year > 1950: 
        print(book.title, book.year)



authorr = session.query(Author).filter(Author.name == "Льюис Стивенсон").first()
print(authorr.name, authorr.bith_year)



count = session.query(func.count(Book.id)).scalar()
print("Всего книг: ", count)



bookss = session.query(Book).order_by(Book.title).limit(3).all()
for book in bookss:
    print(book.title, book.year)



# Закрытие сессии
session.close()