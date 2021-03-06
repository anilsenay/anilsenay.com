import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import styles from "./projects.module.scss"
import SearchBar from "../components/SearchBar"
import Project from "../components/ProjectCard"
import Loading from "../components/Loading"

import { useGetRepos } from "../hooks/getRepos"

const ProjectsPage = () => {
  const { repos, loading, error } = useGetRepos()

  const [searchInput, setSearchInput] = useState("")

  const filteredPosts =
    searchInput.length > 0
      ? repos.filter(item => {
          return item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.description.toLowerCase().includes(searchInput.toLowerCase())
            ? true
            : false
        })
      : repos

  return (
    <Layout currentPage="Projects">
      <SEO title="Projects" />
      <div className={styles.container}>
        <h1>Projects</h1>
        <p className={styles.searchInfoText}>
          There are some of my github projects I choose. You can check out for
          other projects on my github profile. You may use the search below to
          filter by title.
        </p>
        <SearchBar setInput={setSearchInput} />
        <div className={styles.projects}>
          {loading ? (
            <Loading />
          ) : filteredPosts.length !== 0 ? (
            filteredPosts.map(item => {
              return (
                <Project
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  url={item.html_url}
                  language={item.language}
                />
              )
            })
          ) : (
            <span className={styles.noResultsText}>
              {error ? `Error: ${error}` : "No results found"}
            </span>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
