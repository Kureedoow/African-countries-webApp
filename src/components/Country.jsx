import React from 'react'

const Country = ({ country }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden max-w-sm">
      {/* Flag */}
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        className="w-full h-48 object-cover"
      />

      {/* Info */}
      <div className="p-4 space-y-3">
        <h1 className="text-2xl font-semibold text-gray-800">
          {country.name}
        </h1>

        {/* Code + Currency */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">
            🌐 {country.code}
          </span>
          <span className="px-3 py-1 text-sm font-medium bg-orange-500 text-white rounded-full shadow-sm">
            💵 {country.currency}
          </span>
        </div>

        {/* Location */}
        <p className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-small rounded shadow-sm">
  🌍 {country.location}
</p>

      </div>
    </div>
  )
}

export default Country
