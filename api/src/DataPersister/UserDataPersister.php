<?php


namespace App\DataPersister;


use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\User;
use App\Events\NewUserCreatedEvent;
use Nette\Utils\Random;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserDataPersister implements ContextAwareDataPersisterInterface {

    private ContextAwareDataPersisterInterface $decorated;
    private UserPasswordEncoderInterface $encoder;
    protected EventDispatcherInterface $dispatcher;

    public function __construct(
        ContextAwareDataPersisterInterface $decorated,
        UserPasswordEncoderInterface $encoder,
        EventDispatcherInterface $dispatcher) {
        $this->decorated = $decorated;
        $this->encoder = $encoder;
        $this->dispatcher = $dispatcher;
    }

    public function supports($data, array $context = []): bool {
        return $this->decorated->supports($data, $context);
    }

    public function persist($data, array $context = []) {
        if ($data instanceof User && ($context['graphql_operation_name'] ?? null) == 'create') {
            $password = Random::generate(15);
            $data->setPassword($this->encoder->encodePassword($data, $password));
            $event = new NewUserCreatedEvent($data, $password);
            $result = $this->decorated->persist($data, $context);
            $this->dispatcher->dispatch($event);
        } else if ($data instanceof User && ($context['graphql_operation_name'] ?? null) == 'edit') {
            $data->setPassword($this->encoder->encodePassword($data, $data->getPassword()));
            $result = $this->decorated->persist($data, $context);
        } else {
            $result = $this->decorated->persist($data, $context);
        }

        return $result;
    }

    public function remove($data, array $context = []) {
        return $this->decorated->remove($data, $context);
    }
}