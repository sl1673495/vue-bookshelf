import books from "@/hacks/data/books"

export type Books = Book[]
export type Book = typeof books[number]
