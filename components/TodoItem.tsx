import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

type TodoItemProps = {
  taskId?: number,
  taskName?: string,
  taskStatus?: boolean
}

export function TodoItem({ taskId, taskName, taskStatus }: TodoItemProps){
  return (
    <View
      style={styles.itemContainer}
      key={taskId}
    >
      <Text style={styles.title}>
        { taskName }
      </Text>
      {/* <Text style={styles.status}>
        { taskStatus }
      </Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 12,
    marginTop: 4,
    borderRadius: 999,
    
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  status: {

  }
})