<?php


namespace App\Tests\Features;


use App\Entity\User;
use App\Enum\AclResourceEnum;
use App\GraphqlClient\GraphQLClient;
use App\Tests\BaseTestCase;
use Nette\Utils\Random;
use Softonic\GraphQL\Client;
use Softonic\GraphQL\Response;

class GroupTest extends BaseTestCase
{
    public function testUpdateUsersCLassGroup()
    {
        $userEntity = $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_ADMIN']);
        $client = $this->client($userEntity->getEmail());
        $classGroupResponse = $this->createClassGroup(
            $client,
            '2020',
            Random::generate(3, 'a-z'),
            'users/' . $userEntity->getId()
        );
        $this->assertNoErrors($classGroupResponse);
        $classGroupIri = $classGroupResponse->getData()['createClassGroup']['classGroup']['id'];
        $users = [
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId(),
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId()
        ];
        $response = $this->updateUsersClassGroup($client, $classGroupIri, $users, []);
        $this->assertNoErrors($response);
        $this->assertEquals(
            count($users),
            count($response->getData()['updateUsersClassGroup']['classGroup']['users']['edges'])
        );
        /** @var User $userEntity */
        $userEntity = $this->em->find(User::class, explode('/', $users[0])[1]);
        $this->em->refresh($userEntity);
        $this->assertSame($classGroupResponse->getData()['createClassGroup']['classGroup']['_id'],
            $userEntity->getClassGroup()->getId());
        $response = $this->updateUsersClassGroup($client, $classGroupIri, [], [$users[0]]);
        $this->assertNoErrors($response);
        $this->assertEquals(
            count($users) - 1,
            count($response->getData()['updateUsersClassGroup']['classGroup']['users']['edges'])
        );

    }

    public function testUpdateUsersGroup()
    {
        $loggedUser = $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_ADMIN']);
        $client = $this->client($loggedUser->getEmail());
        $createGroupResponse = $this->createGroup($client, Random::generate(8, 'a-z'));
        $groupUri = $createGroupResponse->getData()['createGroup']['group']['id'];
        $users = [
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId(),
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId(),
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId(),
            'users/' . $this->createRandomUser('test', AclResourceEnum::PROP_DEFAULT_ROLES['ROLE_USER'])->getId(),
        ];

        $response = $this->updateUsersGroup($client, $groupUri, $users, []);
        $this->assertEquals(
            count($users),
            count($response->getData()['updateUsersGroup']['group']['users']['edges'])
        );
    }


    private function createClassGroup(
        GraphQLClient $client,
        int $year,
        string $section,
        ?string $teacher
    ): Response {
        return $client->query(
        /** @lang GraphQL */
            '
            mutation createClassGroup($year: Int!, $section: String!, $teacher: String) {
              createClassGroup(
                input: { year: $year, section: $section, teacher: $teacher }
              ) {
                classGroup {
                  id,
                  _id
                  section
                  year
                  users {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }',
            [
                'year' => $year,
                'section' => $section,
                'teacher' => $teacher
            ]
        );
    }

    private function createGroup(
        GraphQLClient $client,
        string $section
    ): Response {
        return $client->query(
        /** @lang GraphQl */
            'mutation createGroup($section: String!) {
              createGroup(input: { section: $section }) {
                group {
                  id,
                  _id
                  subjects {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                  users {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }',
            [
                'section' => $section
            ]
        );
    }


    private function updateUsersClassGroup(
        GraphQLClient $client,
        string $id,
        array $addUsers,
        array $deleteUsers
    ): Response {
        return $client->query(
        /** @lang GraphQL */ '
                        mutation  updateUsersClassGroup($id:ID!, $addUsers: [ID], $deleteUsers: [ID]){
              updateUsersClassGroup(input: { id: $id, addUsers: $addUsers, deleteUsers: $deleteUsers }) {
                classGroup {
                  id
                  users {
                    edges {
                      node {
                        id,
                        _id
                      }
                    }
                  }
                }
              }
            }

            ', [
                'id' => $id,
                'addUsers' => $addUsers,
                'deleteUsers' => $deleteUsers
            ]
        );
    }

    private function updateUsersGroup(
        GraphQLClient $client,
        string $id,
        array $addUsers,
        array $deleteUsers
    ): Response {
        return $client->query(
        /** @lang GraphQL */ 'mutation updateUsersGroup($id: ID!, $addUsers: [ID], $deleteUsers: [ID]) {
              updateUsersGroup(
                input: { id: $id, addUsers: $addUsers, deleteUsers: $deleteUsers }
              ) {
                group {
                  id
                  users {
                    edges {
                      node {
                        id
                      }
                    }
                  }
                }
              }
            }', [
                'id' => $id,
                'addUsers' => $addUsers,
                'deleteUsers' => $deleteUsers
            ]
        );
    }
}
