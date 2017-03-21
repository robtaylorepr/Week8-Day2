
function Movie (title,director_list,genre,year,actor_list) {
  this.title         = title;
  this.director_list = director_list;
  this.genre         = genre;
  this.year          = year;
  this.actor_list    = actor_list;
}

a = new Movie (
  'The Dark Knight',
  ['Nolan'],
  'Drama',
  2008,
  ['Christian Bale', 'Heath Ledger', 	'Michael Caine']
)

b = new Movie (
  'Usual Suspects',
  ['Singer'],
  'Drama',
  1995,
  ['Stephen Baldwin', 'Benicio Del Toro', 	'Kevin Spacey']
)

c = new Movie (
  'Shawshank Redemption',
  ['Darabont'],
  'Drama',
  1994,
  ['Tim Robbins', '	Morgan Freeman']
)

d = new Movie (
  'Hobbits',
  ['Freeman'],
  'Fantasy',
  2012,
  ['Ian McKellen', 'Martin Freeman', 	'Richard Armitage']
)

e = new Movie (
  'Green Mile',
  ['Darabont'],
  'Drama',
  1999,
  ['Tom Hanks', 'David Morse', 	'Michael Caine']
)

var arr = []
arr.push(a)
arr.push(b)
arr.push(c)
arr.push(d)
arr.push(e)

function sortedList(a,b){
  aTitle = a.title
  bTitle = b.title
  if (aTitle < bTitle){
    return -1
  }
  if (aTitle > bTitle){
    return 1
  }
  return 0
}

arr.sort(sortedList)

console.log(JSON.stringify(arr))
