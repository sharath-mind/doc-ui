import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import NameCard from '../../components/NameCard'
import SearchBar from '../../components/SearchBar'
import style from "./onboarding.module.css"

const Onboarding = () => {
  return (
    <Layout>
      <Header />
      <NameCard />
      <SearchBar />
    </Layout>
  )
}

export default Onboarding