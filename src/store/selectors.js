import { createSelector } from 'reselect'

// osobny plik
import { connect } from 'react-redux'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getScanData, getProjects],





  (scanData, projects) => {
      
scanData = {
    ...scanData,
    projectId: projects['123']
}
  }
)

const Table = (props) => (
        <table data={props.data}>

        </table>
    )
