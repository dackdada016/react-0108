function FilterButtonGroup({ filter, setFilter }) {
  const filterOptions = ['All', 'Active', 'Completed']

  const filterOptionsChinese = ['所有', '進行中', '已完成']
  return (
    <>
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              filter === v ? 'filter-button-active' : 'filter-button-normal'
            }
            onClick={() => {
              setFilter(v)
            }}
          >
            {filterOptionsChinese[i]}
          </button>
        )
      })}
    </>
  )
}

export default FilterButtonGroup
