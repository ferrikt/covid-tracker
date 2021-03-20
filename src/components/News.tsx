import * as React from 'react';
import { Link, Heading, Text, Box, Flex } from 'theme-ui';
import { useNewsData } from '../hooks/useNewsData';
import Loading from './Loading';

interface IProps {}

const News: React.SFC<IProps> = () => {
    const [isLoading, error, newsData] = useNewsData();
    return isLoading ? (
        <Loading />
    ) : (
        <>
            {newsData && newsData.length > 0 && (
                <Flex
                    sx={{
                        overflowY: 'scroll',
                        flexDirection: 'column'
                    }}
                >
                    {newsData.map((news, i) => (
                        <Link key={i} href={news.link} target="_blank" mr={1}>
                            <Box
                                sx={{
                                    border: '1px gray solid',
                                    borderRadius: '5px',
                                    p: 2
                                }}
                            >
                                <Heading
                                    sx={{
                                        color: 'gray.400',
                                        mb: 1,
                                        fontSize: '14px'
                                    }}
                                >
                                    {news.title}
                                </Heading>
                                <Text sx={{ color: 'gray.500', fontSize: '10px' }}>
                                    {news.source} | {news.date}
                                </Text>
                            </Box>
                        </Link>
                    ))}
                </Flex>
            )}
        </>
    );
};
export default News;
