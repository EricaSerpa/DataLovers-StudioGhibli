// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/


//ORDENAR//
export const ordemAlfabetica = (data, order) => {
  if (order === "crescente") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1)
  } else if (order === "decrescente") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1)
  } return data
};

//FILTRO//

export const getPeople = films => {
  let people = []
  for (let film of films) {
    people = people.concat (film.people)  //concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array). //
  }
  return people
}



