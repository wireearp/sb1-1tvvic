import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Text } from 'react-native-paper';

interface MenuCardProps {
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
}

export function MenuCard({ title, subtitle, color, onPress }: MenuCardProps) {
  return (
    <Card
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  subtitle: {
    color: 'white',
    opacity: 0.8,
  },
});