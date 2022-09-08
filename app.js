const PkName = document.querySelector('#pk-name')
const PkId = document.querySelector('#pk-id')
const PkType = document.querySelector('#pkType')
const PkAbility = document.querySelector('#pkAbility')
const PkImage = document.querySelector('.pokemon-image')

const fetchPokemon = async pokemon => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  )
  const data = await APIresponse.json()
  return data
}

const renderPokemon = async pokemon => {
  const data = await fetchPokemon(pokemon)

  PkName.innerHTML = data.name
  PkId.innerHTML = data.id
  PkImage.src =
    data['sprites']['versions']['generation-v']['black-white']['animated'][
      'front_default'
    ]
  PkAbility.innerHTML = data['abilities']['0']['ability']['name']
  PkType.innerHTML = data['types']['0']['type']['name']
}

renderPokemon(410)
